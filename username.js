const tg = Telegram.WebApp;

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    // Проверка на мобильные устройства (Android, iPhone, iPad, iPod)
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent);
}

// Функция для проверки, является ли устройство MacBook или компьютером
function isNonMobileAppleDevice() {
    // Проверка на устройства с macOS (MacBook, iMac и т.д.)
    return /Macintosh|Mac OS/i.test(navigator.userAgent) && !/iPhone|iPad/i.test(navigator.userAgent);
}

// Проверка платформы и блокировка доступа на MacBook, компьютерах и других неподдерживаемых устройствах
if (tg.platform === "desktop" || !isMobileDevice() || isNonMobileAppleDevice()) {
    // Выводим сообщение и блокируем приложение для компьютеров, MacBook и других неподдерживаемых устройств
    document.body.innerHTML = "<h2>Sorry, but you need to use a mobile phone or tablet to access this app.</h2>";
} else {
    // Код для мобильных устройств
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

    // Продолжение вашего основного кода...
}
