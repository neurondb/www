#!/usr/bin/env python3
"""
Fix arrow connections in all tutorial SVG files.
Arrows must:
1. Start from center-bottom of top boxes
2. Go down slightly (4px) to clear the box
3. Move horizontally to align with the target
4. Go down to center-top of bottom boxes
5. Use stroke-dasharray="1.5,1.5"
"""

import os
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import List, Tuple, Optional

def parse_box(rect_elem) -> Optional[Tuple[float, float, float, float]]:
    """Parse a rect element and return (x, y, width, height)."""
    try:
        x = float(rect_elem.get('x', 0))
        y = float(rect_elem.get('y', 0))
        width = float(rect_elem.get('width', 0))
        height = float(rect_elem.get('height', 0))
        return (x, y, width, height)
    except (ValueError, TypeError):
        return None

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

def parse_transform(transform_attr: str) -> Tuple[float, float]:
    """Parse transform="translate(x, y)" and return (x, y)."""
    if not transform_attr:
        return (0, 0)
    match = re.search(r'translate\(([\d.]+),\s*([\d.]+)\)', transform_attr)
    if match:
        return (float(match.group(1)), float(match.group(2)))
    return (0, 0)

def find_all_boxes(svg_root) -> List[Tuple[float, float, float, float, ET.Element]]:
    """Find all rect elements that represent boxes (not backgrounds), accounting for transforms."""
    boxes = []
    
    # Find all groups with transforms and their rects
    for g in svg_root.findall('.//{http://www.w3.org/2000/svg}g'):
        transform = g.get('transform', '')
        tx, ty = parse_transform(transform)
        
        for rect in g.findall('.//{http://www.w3.org/2000/svg}rect'):
            width = float(rect.get('width', 0))
            height = float(rect.get('height', 0))
            fill = rect.get('fill', '')
            
            # Skip very large rectangles (likely backgrounds)
            if width > 500 or height > 300:
                continue
                
            # Skip if it's a background gradient
            if 'url(' in fill:
                continue
                
            box = parse_box(rect)
            if box and box[2] > 0 and box[3] > 0:  # width and height > 0
                # Apply transform to box coordinates
                x, y, w, h = box
                boxes.append((x + tx, y + ty, w, h, rect))
    
    # Track which rects we've already found in groups
    found_rects = set()
    for g in svg_root.findall('.//{http://www.w3.org/2000/svg}g'):
        for rect in g.findall('.//{http://www.w3.org/2000/svg}rect'):
            found_rects.add(id(rect))
    
    # Also check rects directly under root (not in groups)
    for rect in svg_root.findall('.//{http://www.w3.org/2000/svg}rect'):
        # Skip if already found in a group
        if id(rect) in found_rects:
            continue
            
        width = float(rect.get('width', 0))
        height = float(rect.get('height', 0))
        fill = rect.get('fill', '')
        
        # Skip very large rectangles (likely backgrounds)
        if width > 500 or height > 300:
            continue
            
        # Skip if it's a background gradient
        if 'url(' in fill:
            continue
            
        box = parse_box(rect)
        if box and box[2] > 0 and box[3] > 0:  # width and height > 0
            boxes.append((*box, rect))
    
    return boxes

def parse_path_d(path_d: str) -> Optional[Tuple[float, float, float, float]]:
    """Try to extract start and end points from a path d attribute."""
    # Look for M (move) and L (line) commands
    coords = re.findall(r'[ML]\s+([\d.]+)\s+([\d.]+)', path_d)
    if len(coords) >= 2:
        try:
            start_x, start_y = float(coords[0][0]), float(coords[0][1])
            end_x, end_y = float(coords[-1][0]), float(coords[-1][1])
            return (start_x, start_y, end_x, end_y)
        except (ValueError, IndexError):
            pass
    return None

def find_closest_box(point: Tuple[float, float], boxes: List[Tuple], is_bottom: bool = True) -> Optional[Tuple]:
    """Find the box closest to a point."""
    px, py = point
    min_dist = float('inf')
    closest = None
    
    for box in boxes:
        if is_bottom:
            box_point = get_box_center_bottom(box[:4])
        else:
            box_point = get_box_center_top(box[:4])
        
        dist = ((px - box_point[0])**2 + (py - box_point[1])**2)**0.5
        if dist < min_dist:
            min_dist = dist
            closest = box
    
    return closest

def generate_arrow_path(source_box: Tuple, target_box: Tuple, same_row: bool = False) -> str:
    """Generate an arrow path following the correct pattern."""
    if same_row:
        # Horizontal connection: center to center
        src_center = get_box_center(source_box[:4])
        tgt_center = get_box_center(target_box[:4])
        return f"M {src_center[0]:.1f} {src_center[1]:.1f} L {tgt_center[0]:.1f} {tgt_center[1]:.1f}"
    else:
        # Vertical L-shaped connection
        src_bottom = get_box_center_bottom(source_box[:4])
        tgt_top = get_box_center_top(target_box[:4])
        
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

def fix_svg_arrows(svg_path: Path):
    """Fix arrow connections in a single SVG file."""
    try:
        # Read file and fix common XML issues
        with open(svg_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unescaped ampersands in attributes (common issue)
        content = re.sub(r'(&)(?!amp;|lt;|gt;|quot;|apos;)([^;]*?)([=])', r'&amp;\2\3', content)
        
        # Parse XML
        root = ET.fromstring(content)
        tree = ET.ElementTree(root)
        
        # Register namespace
        ET.register_namespace('', 'http://www.w3.org/2000/svg')
        
        # Find all boxes
        boxes = find_all_boxes(root)
        if len(boxes) < 2:
            print(f"  Skipping {svg_path.name}: Not enough boxes found")
            return False
        
        # Find all path elements with marker-end (arrows)
        paths = root.findall('.//{http://www.w3.org/2000/svg}path[@marker-end]')
        if not paths:
            print(f"  Skipping {svg_path.name}: No arrows found")
            return False
        
        # Group boxes by approximate y position (same row if y within 20px)
        rows = {}
        for box in boxes:
            y = box[1]
            row_key = round(y / 20) * 20
            if row_key not in rows:
                rows[row_key] = []
            rows[row_key].append(box)
        
        fixed_count = 0
        for path in paths:
            path_d = path.get('d', '')
            if not path_d:
                continue
            
            # Try to determine source and target boxes
            path_points = parse_path_d(path_d)
            if not path_points:
                continue
            
            start_x, start_y, end_x, end_y = path_points
            
            # Find closest boxes
            source_box = find_closest_box((start_x, start_y), boxes, is_bottom=True)
            target_box = find_closest_box((end_x, end_y), boxes, is_bottom=False)
            
            if not source_box or not target_box:
                continue
            
            # Check if same row
            source_y = source_box[1]
            target_y = target_box[1]
            same_row = abs(source_y - target_y) < 30
            
            # Generate new path
            new_path_d = generate_arrow_path(source_box, target_box, same_row)
            
            # Update path
            path.set('d', new_path_d)
            path.set('stroke-dasharray', '1.5,1.5')
            path.set('stroke-width', '0.5')
            if path.get('opacity') is None:
                path.set('opacity', '0.8')
            
            fixed_count += 1
        
        if fixed_count > 0:
            # Write back
            tree.write(svg_path, encoding='utf-8', xml_declaration=True)
            print(f"  Fixed {fixed_count} arrows in {svg_path.name}")
            return True
        else:
            print(f"  No arrows fixed in {svg_path.name}")
            return False
            
    except Exception as e:
        print(f"  Error processing {svg_path.name}: {e}")
        return False

def main():
    """Main function to fix all tutorial SVG files."""
    tutorials_dir = Path('/Users/ibrarahmed/pgelephant/pge/neurondb-www/public/tutorials')
    
    if not tutorials_dir.exists():
        print(f"Error: Tutorials directory not found: {tutorials_dir}")
        return
    
    # Find all diagram SVG files (exclude header.svg)
    svg_files = list(tutorials_dir.rglob('diagram-*.svg'))
    
    print(f"Found {len(svg_files)} diagram SVG files")
    print("Fixing arrow connections...\n")
    
    fixed_count = 0
    for svg_file in sorted(svg_files):
        if fix_svg_arrows(svg_file):
            fixed_count += 1
    
    print(f"\nFixed arrows in {fixed_count} files")

if __name__ == '__main__':
    main()
