const tg = Telegram.WebApp;

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent);
}

// Проверка платформы и блокировка доступа на десктопах и других устройствах, кроме мобильных и планшетов
if (tg.platform === "desktop" || !isMobileDevice()) {
    // Выводим сообщение и блокируем приложение для компьютеров и других неподдерживаемых устройств
    document.body.innerHTML = "<h2>Sorry, but you need your mobile phone or tablet to access this app.</h2>";
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
