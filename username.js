const tg = Telegram.WebApp;
tg.expand();
tg.setHeaderColor("#000000");
tg.setBackgroundColor("#000000");
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = resizeCanvas;
window.username = tg.initDataUnsafe.user.username;
window.tgId = tg.initDataUnsafe.user.id;

function updateUsername() {
    document.getElementById('username1').innerText = window.username;
}

document.addEventListener('DOMContentLoaded', function() {
    updateUsername();
});