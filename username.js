const tg = Telegram.WebApp;
tg.expand();
tg.setHeaderColor("#ffffff");
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
