import sys

import math

import xml.etree.ElementTree as ET



NS = {"svg": "http://www.w3.org/2000/svg"}



def parse_float(value, default=0.0):

    try:

        return float(value)

    except Exception:

        return default



class RectNode:

    def __init__(self, element):

        x = parse_float(element.get("x", "0"))

        y = parse_float(element.get("y", "0"))

        w = parse_float(element.get("width", "0"))

        h = parse_float(element.get("height", "0"))



        self.x = x

        self.y = y

        self.w = w

        self.h = h



        self.cx = x + w / 2.0

        self.cy = y + h / 2.0



    def attachment_points(self):

        points = []

        # Top edge center

        points.append((self.cx, self.y))

        # Bottom edge center

        points.append((self.cx, self.y + self.h))

        # Left edge center

        points.append((self.x, self.cy))

        # Right edge center

        points.append((self.x + self.w, self.cy))

        return points





def distance(p1, p2):

    dx = p1[0] - p2[0]

    dy = p1[1] - p2[1]

    return math.hypot(dx, dy)





def find_nearest_attachment(point, rects):

    best_p = point

    best_d = float("inf")



    for r in rects:

        for ap in r.attachment_points():

            d = distance(point, ap)

            if d < best_d:

                best_d = d

                best_p = ap



    return best_p





def convert_line_to_path(line_el, start, end):

    """

    Convert one line element to a path element with right-angle segments.

    Uses one bend: horizontal then vertical or vertical then horizontal.

    """

    x1, y1 = start

    x2, y2 = end



    # Choose bend direction based on shorter total length

    # Option A: horizontal then vertical via (x2, y1)

    len_a = abs(x2 - x1) + abs(y2 - y1)

    # Option B: vertical then horizontal via (x1, y2)

    len_b = len_a  # same total, but keep structure for clarity



    if len_a <= len_b:

        mid_x, mid_y = x2, y1

        d = f"M {x1} {y1} H {mid_x} V {y2}"

    else:

        mid_x, mid_y = x1, y2

        d = f"M {x1} {y1} V {mid_y} H {x2}"



    path_el = ET.Element("path")

    path_el.set("d", d)



    # Copy visual attributes from original line

    for attr in ["stroke", "stroke-width", "fill",

                 "marker-start", "marker-end",

                 "stroke-dasharray"]:

        val = line_el.get(attr)

        if val is not None:

            path_el.set(attr, val)



    # Force no fill for paths that act as connectors

    if path_el.get("fill") is None or path_el.get("fill") == "none":

        path_el.set("fill", "none")



    return path_el





def process_svg(tree):

    root = tree.getroot()



    # Collect rectangles

    rects = []

    for rect_el in root.findall(".//svg:rect", NS):

        # Optional: skip background rectangles by heuristic

        w = parse_float(rect_el.get("width", "0"))

        h = parse_float(rect_el.get("height", "0"))

        if w <= 0 or h <= 0:

            continue

        rects.append(RectNode(rect_el))



    # Process lines as connectors

    for parent in root.iter():

        children = list(parent)

        for idx, child in enumerate(children):

            tag = child.tag

            if not tag.endswith("line"):

                continue



            x1 = parse_float(child.get("x1", "0"))

            y1 = parse_float(child.get("y1", "0"))

            x2 = parse_float(child.get("x2", "0"))

            y2 = parse_float(child.get("y2", "0"))



            start = (x1, y1)

            end = (x2, y2)



            if rects:

                start = find_nearest_attachment(start, rects)

                end = find_nearest_attachment(end, rects)



            path_el = convert_line_to_path(child, start, end)



            # Replace line with new path

            parent.remove(child)

            parent.insert(idx, path_el)





def main():

    if len(sys.argv) != 3:

        print("Usage: python fix_svg_connectors.py input.svg output.svg")

        sys.exit(1)



    input_path = sys.argv[1]

    output_path = sys.argv[2]



    tree = ET.parse(input_path)

    process_svg(tree)

    tree.write(output_path, encoding="utf-8", xml_declaration=True)





if __name__ == "__main__":

    main()
