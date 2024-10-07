const tg = window.Telegram.WebApp;
tg.expand();
tg.secondary_bg_color("#000000");
tg.bg_color("#000000");
tg.header_bg_color("#000000");
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = function() {
    resizeCanvas();
    telegramWebApp.isLoaded();
};

window.onresize = resizeCanvas;

let username = tg.initDataUnsafe.user.username;
