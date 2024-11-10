document.addEventListener('DOMContentLoaded', async function() {
    // Здесь нужно указать tgId пользователя
    const tgId = tg.initDataUnsafe.user.id;
    console.log(tgId); // замените YOUR_USER_TGID на фактический tgId пользователя

    try {
        // Отправляем запрос на сервер для получения очков пользователя по tgId
        const response = await fetch(`http://notjump.top/shop?tgId=${tgId}`);
        const data = await response.json();
        console.log(data);
        if (data.score !== undefined) {
            // Отображаем результат в элементе с id highscore1
            document.getElementById('highscore1').innerText = data.score;
        } else {
            document.getElementById('highscore1').innerText = '0'; // Если очков нет, показываем 0
        }

        // Установите также username, если есть
        const usernameElement = document.getElementById('username1');
        if (usernameElement) {
            usernameElement.innerText = data.username || 'Unknown';
        }

    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('highscore1').innerText = 'Ошибка';
    }
});
