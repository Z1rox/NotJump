const tg = Telegram.WebApp;
tg.expand();
console.log(tg.platform);
tg.setHeaderColor("#000000");
tg.setBackgroundColor("#000000");
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.onresize = resizeCanvas;
function updateUsername(){
    let username = tg.initDataUnsafe.user.username;
    document.getElementById('username1').innerText = username;
}
document.addEventListener('DOMContentLoaded', function() {
    updateUsername();
});