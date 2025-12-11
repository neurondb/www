#!/usr/bin/env python3
"""
Fix arrow connections in ai-tutorial-01-introduction SVG files.
Arrows must:
1. Start from center-bottom of top boxes
2. Go down slightly (4px) to clear the box
3. Move horizontally to align with the target
4. Go down to center-top of bottom boxes
5. Use stroke-dasharray="1.5,1.5"
"""

import re
from pathlib import Path
from typing import List, Tuple, Optional

def parse_transform(transform_attr: str) -> Tuple[float, float]:
    """Parse transform="translate(x, y)" and return (x, y)."""
    if not transform_attr:
        return (0, 0)
    match = re.search(r'translate\(([\d.]+),\s*([\d.]+)\)', transform_attr)
    if match:
        return (float(match.group(1)), float(match.group(2)))
    return (0, 0)

def extract_boxes(content: str) -> List[Tuple[float, float, float, float]]:
    """Extract all boxes with their absolute positions (accounting for transforms)."""
    boxes = []
    
    # Find all groups with transforms and their rects
    group_pattern = r'<g\s+transform="translate\(([\d.]+),\s*([\d.]+)\)"[^>]*>.*?</g>'
    
    for group_match in re.finditer(r'<g\s+transform="translate\(([\d.]+),\s*([\d.]+)\)"[^>]*>(.*?)</g>', content, re.DOTALL):
        tx = float(group_match.group(1))
        ty = float(group_match.group(2))
        group_content = group_match.group(3)
        
        # Find rects in this group
        for rect_match in re.finditer(r'<rect\s+([^>]+)>', group_content):
            rect_attrs = rect_match.group(1)
            
            # Parse rect attributes
            width_match = re.search(r'width="([\d.]+)"', rect_attrs)
            height_match = re.search(r'height="([\d.]+)"', rect_attrs)
            x_match = re.search(r'x="([\d.]+)"', rect_attrs)
            y_match = re.search(r'y="([\d.]+)"', rect_attrs)
            fill_match = re.search(r'fill="([^"]+)"', rect_attrs)
            
            if not (width_match and height_match and x_match and y_match):
                continue
            
            width = float(width_match.group(1))
            height = float(height_match.group(1))
            x = float(x_match.group(1)) + tx
            y = float(y_match.group(1)) + ty
            
            # Skip large boxes (backgrounds)
            if width > 500 or height > 200:
                continue
            
            # Skip gradient fills
            if fill_match and 'url(' in fill_match.group(1):
                continue
            
            if width > 0 and height > 0:
                boxes.append((x, y, width, height))
    
    return boxes

def get_box_center_bottom(box: Tuple[float, float, float, float]) -> Tuple[float, float]:
    """Get center-bottom point of a box."""
    x, y, width, height = box
    return (x + width / 2, y + height)

def get_box_center_top(box: Tuple[float, float, float, float]) -> Tuple[float, float]:
    """Get center-top point of a box."""
    x, y, width, height = box
    return (x + width / 2, y)

def get_box_center(box: Tuple[float, float, float, float]) -> Tuple[float, float]:
    """Get center point of a box."""
    x, y, width, height = box
    return (x + width / 2, y + height / 2)

def find_closest_box(point: Tuple[float, float], boxes: List[Tuple], is_bottom: bool = True) -> Optional[Tuple]:
    """Find the box closest to a point."""
    px, py = point
    min_dist = float('inf')
    closest = None
    
    for box in boxes:
        if is_bottom:
            box_point = get_box_center_bottom(box)
        else:
            box_point = get_box_center_top(box)
        
        dist = ((px - box_point[0])**2 + (py - box_point[1])**2)**0.5
        if dist < min_dist:
            min_dist = dist
            closest = box
    
    return closest

def generate_arrow_path(source_box: Tuple, target_box: Tuple, same_row: bool = False) -> str:
    """Generate an arrow path following the correct pattern."""
    if same_row:
        # Horizontal connection: center to center
        src_center = get_box_center(source_box)
        tgt_center = get_box_center(target_box)
        return f"M {src_center[0]:.1f} {src_center[1]:.1f} L {tgt_center[0]:.1f} {tgt_center[1]:.1f}"
    else:
        # Vertical L-shaped connection
        src_bottom = get_box_center_bottom(source_box)
        tgt_top = get_box_center_top(target_box)
        
        # Start from center-bottom
        start_x, start_y = src_bottom
        
        # Go down 4px to clear the box
        mid_y1 = start_y + 4
        
        # Move horizontally if needed
        if abs(start_x - tgt_top[0]) > 1:  # Need horizontal movement
            mid_x = tgt_top[0]
            mid_y2 = mid_y1
            end_x, end_y = tgt_top
            return f"M {start_x:.1f} {start_y:.1f} L {start_x:.1f} {mid_y1:.1f} L {mid_x:.1f} {mid_y2:.1f} L {end_x:.1f} {end_y:.1f}"
        else:
            # Direct vertical connection
            end_x, end_y = tgt_top
            return f"M {start_x:.1f} {start_y:.1f} L {start_x:.1f} {mid_y1:.1f} L {end_x:.1f} {end_y:.1f}"

def parse_path_d(path_d: str) -> Optional[Tuple[float, float, float, float]]:
    """Try to extract start and end points from a path d attribute."""
    coords = re.findall(r'[ML]\s+([\d.]+)\s+([\d.]+)', path_d)
    if len(coords) >= 2:
        try:
            start_x, start_y = float(coords[0][0]), float(coords[0][1])
            end_x, end_y = float(coords[-1][0]), float(coords[-1][1])
            return (start_x, start_y, end_x, end_y)
        except (ValueError, IndexError):
            pass
    return None

def fix_svg_arrows(svg_path: Path):
    """Fix arrow connections in a single SVG file."""
    try:
        with open(svg_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract marker ID from file
        marker_match = re.search(r'<marker\s+id="([^"]+)"', content)
        marker_id = marker_match.group(1) if marker_match else 'arrowhead'
        marker_url = f'url(#{marker_id})'
        
        # Extract boxes
        boxes = extract_boxes(content)
        if len(boxes) < 2:
            print(f"  Skipping {svg_path.name}: Not enough boxes")
            return False
        
        # Find all path elements with marker-end
        path_pattern = r'<path\s+([^>]*?d="([^"]+)"[^>]*?)(/?)>'
        
        def replace_path(match):
            full_match = match.group(0)
            attrs = match.group(1)
            path_d = match.group(2)
            self_closing = match.group(3)
            # marker_url is available from outer scope
            
            # Check if it has marker-end (is an arrow)
            if 'marker-end' not in attrs:
                return full_match
            
            # Try to determine source and target boxes
            path_points = parse_path_d(path_d)
            if not path_points:
                return full_match
            
            start_x, start_y, end_x, end_y = path_points
            
            # Find closest boxes
            source_box = find_closest_box((start_x, start_y), boxes, is_bottom=True)
            target_box = find_closest_box((end_x, end_y), boxes, is_bottom=False)
            
            if not source_box or not target_box:
                return full_match
            
            # Check if same row
            source_y = source_box[1]
            target_y = target_box[1]
            same_row = abs(source_y - target_y) < 30
            
            # Generate new path
            new_path_d = generate_arrow_path(source_box, target_box, same_row)
            
            # Update attributes carefully
            new_attrs = attrs
            # Replace d attribute
            new_attrs = re.sub(r'd="[^"]*"', f'd="{new_path_d}"', new_attrs)
            # Update or add stroke-dasharray
            if 'stroke-dasharray' in new_attrs:
                new_attrs = re.sub(r'stroke-dasharray="[^"]*"', 'stroke-dasharray="1.5,1.5"', new_attrs)
            else:
                new_attrs += ' stroke-dasharray="1.5,1.5"'
            # Update stroke-width to 0.5
            if 'stroke-width' in new_attrs:
                new_attrs = re.sub(r'stroke-width="[^"]*"', 'stroke-width="0.5"', new_attrs)
            else:
                new_attrs += ' stroke-width="0.5"'
            # Update marker-end to correct value (use marker_url from outer scope)
            if 'marker-end' in new_attrs:
                new_attrs = re.sub(r'marker-end="[^"]*"', f'marker-end="{marker_url}"', new_attrs)
            else:
                new_attrs += f' marker-end="{marker_url}"'
            # Add opacity if not present
            if 'opacity=' not in new_attrs:
                new_attrs += ' opacity="0.8"'
            
            return f'<path {new_attrs}{self_closing}>'
        
        new_content = re.sub(path_pattern, replace_path, content)
        
        if new_content != content:
            with open(svg_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  Fixed {svg_path.name}")
            return True
        
        return False
            
    except Exception as e:
        print(f"  Error processing {svg_path.name}: {e}")
        return False

def main():
    """Main function to fix all tutorial-01 SVG files."""
    tutorial_dir = Path('/Users/ibrarahmed/pgelephant/pge/neurondb-www/public/tutorials/ai-tutorial-01-introduction')
    
    if not tutorial_dir.exists():
        print(f"Error: Tutorial directory not found: {tutorial_dir}")
        return
    
    # Find all diagram SVG files
    svg_files = list(tutorial_dir.glob('diagram-*.svg'))
    
    print(f"Found {len(svg_files)} diagram SVG files")
    print("Fixing arrow connections...\n")
    
    fixed_count = 0
    for svg_file in sorted(svg_files):
        if fix_svg_arrows(svg_file):
            fixed_count += 1
    
    print(f"\nFixed arrows in {fixed_count} files")

if __name__ == '__main__':
    main()
