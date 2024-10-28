// Получаем значение highscore из localStorage
let highScore = localStorage.getItem("highScore");

// Проверяем, если значение не null, то выводим его
if (highScore !== null) {
    document.getElementById("highscore1").innerText = highScore;
} else {
    document.getElementById("highscore1").innerText = "No highscore yet"; // Или другое значение по умолчанию
}
