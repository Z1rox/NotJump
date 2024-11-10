// shop.js
const tg = Telegram.WebApp;

// Функция для получения score по tgId
async function fetchScore() {
    const tgId = tg.initDataUnsafe.user.id; // Получаем tgId из Telegram Web App
    const url = `https://notjump.top/shop?tgId=${tgId}`; // Формируем URL запроса с tgId

    try {
        const response = await fetch(url); // Отправляем GET-запрос
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json(); // Получаем ответ в формате JSON
        console.log(data)
        document.getElementById('highscore1').innerText = data.score !== undefined ? data.score : '0'; // Обновляем элемент highscore1
    } catch (error) {
        console.error("Произошла ошибка при получении данных:", error);
        document.getElementById('highscore1').innerText = 'Error'; // Выводим сообщение об ошибке
    }
}

// Запускаем функцию после загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    fetchScore(); // Вызываем функцию для получения score
});