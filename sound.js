// Переменная флаг для отслеживания состояния звука
let isSoundPlaying = true;

// Устанавливаем громкость аудио на 50% при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    audio.volume = 0.1; // Громкость на 50%
});

// Функция для воспроизведения или остановки фоновой музыки
function toggleBackgroundMusic() {
    const audio = document.getElementById("background-music");
    
    if (isSoundPlaying) {
        audio.pause(); // Если звук включен, ставим на паузу
    } else {
		audio.volume = 0.1;
        audio.play(); // Если звук выключен, воспроизводим
    }

    // Меняем значение флага
    isSoundPlaying = !isSoundPlaying;
}

// Добавляем обработчик события для переключения звука по клику
document.getElementById("sound-btn").addEventListener("click", function() {
    toggleBackgroundMusic(); // Запускаем или останавливаем аудио
});