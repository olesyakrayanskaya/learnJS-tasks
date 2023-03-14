let coordinates = elem.getBoundingClientRect();

let upLeftOuterAng = [coordinates.left, coordinates.top];
let bottomRightOuterAng = [coordinates.right, coordinates.bottom];
let upLeftInnerAng = [coords.left + field.clientLeft, coords.top + field.clientTop];
let bottomRightInnerAng = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
];

