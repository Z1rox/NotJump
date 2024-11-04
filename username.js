const tg = Telegram.WebApp;
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    function hideLoadingScreen() {
        loadingScreen.style.display = "none";
    }

    const tg = window.Telegram.WebApp;
    tg.onEvent("web_app_ready", hideLoadingScreen);
    setTimeout(() => {
        if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
            hideLoadingScreen();
        }
    }, 1);
});

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
function updateUsername(){
    let username = tg.initDataUnsafe.user.username;
    document.getElementById('username1').innerText = username;
}
document.addEventListener('DOMContentLoaded', function() {
    updateUsername();
});