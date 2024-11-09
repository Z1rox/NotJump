const tg = Telegram.WebApp;

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent);
}

function isNonMobileAppleDevice() {
    return /Macintosh|Mac OS/i.test(navigator.userAgent) && !/iPhone|iPad/i.test(navigator.userAgent);
}

if (tg.platform === "desktop" || !isMobileDevice() || isNonMobileAppleDevice()) {
    document.body.innerHTML = "<h2>Sorry, but you need to use a mobile phone or tablet to access this app.</h2>";
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
