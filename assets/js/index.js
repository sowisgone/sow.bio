let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    // console.log(x, y);

innerCursor.style.left = `${x}px`;
innerCursor.style.top = `${y}px`;
};