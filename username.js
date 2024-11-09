// Инициализация Telegram WebApp API
const tg = Telegram.WebApp;

// Проверка платформы и блокировка на десктопах
if (tg.platform === "tdesktop") {
    // Выводим сообщение и блокируем приложение
    document.body.innerHTML = "<h2>Sorry, but you need your mobile phone</h2>";
} else {
    // Основной код для мобильных устройств
    tg.expand();
    tg.setHeaderColor("#000000");
    tg.setBackgroundColor("#000000");

    // Основной код вашего приложения
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
