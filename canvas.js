document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = function() {
    resizeCanvas();
};
window.onresize = resizeCanvas;