const tg = Telegram.WebApp;
console.log(tg.platform)
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent);
}

function isNonMobileAppleDevice() {
    return /Macintosh|Mac OS/i.test(navigator.userAgent) && !/iPhone|iPad/i.test(navigator.userAgent);
}

if (tg.platform === "desktop" || !isMobileDevice() || isNonMobileAppleDevice()) {
    if (tg.platform === "desktop" || !isMobileDevice() || isNonMobileAppleDevice()) {
        document.body.innerHTML = "<h2 style='color: white; text-align: center; margin-top: 20%;'>Please use your mobile to continue</h2>";
        document.body.style.backgroundColor = "black";
    }
    
} else {
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

}