document.addEventListener('DOMContentLoaded', function() {
    const claimButton = document.getElementById('claimButton');
    const deleteButton = document.getElementById('deleteButton');

    // Загружаем состояние кнопки из localStorage (по умолчанию false)
    const buttonStatus = localStorage.getItem('buttonStatus') === 'true';

    // Устанавливаем состояние кнопки при загрузке страницы
    if (buttonStatus) {
        claimButton.innerText = 'Disable'; // Кнопка включена
        claimButton.classList.remove('disabled');
        claimButton.classList.add('enabled');
    } else {
        claimButton.innerText = 'Enable'; // Кнопка выключена
        claimButton.classList.remove('enabled');
        claimButton.classList.add('disabled');
    }

    // Обработчик нажатия на кнопку
    claimButton.addEventListener('click', function() {
        const isEnabled = claimButton.classList.contains('enabled');
        
        // Переключаем состояние кнопки
        if (isEnabled) {
            // Если кнопка была включена, выключаем её
            localStorage.setItem('buttonStatus', 'false');
            claimButton.innerText = 'Enable';
            claimButton.classList.remove('enabled');
            claimButton.classList.add('disabled');
        } else {
            // Если кнопка была выключена, включаем её
            localStorage.setItem('buttonStatus', 'true');
            claimButton.innerText = 'Disable';
            claimButton.classList.remove('disabled');
            claimButton.classList.add('enabled');
        }

        // Показать/скрыть кнопку Delete в зависимости от состояния
        if (claimButton.classList.contains('enabled')) {
            deleteButton.style.display = 'block';
        } else {
            deleteButton.style.display = 'none';
        }
    });

    // Обработчик нажатия на кнопку Delete
    deleteButton.addEventListener('click', function() {
        localStorage.setItem('buttonStatus', 'false');
        claimButton.innerText = 'Enable';
        claimButton.classList.remove('enabled');
        claimButton.classList.add('disabled');
        deleteButton.style.display = 'none';
    });
});
