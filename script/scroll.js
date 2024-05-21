// Скрипт для прокрутки
window.onload = function() {
    // Начальная позиция прокрутки
    var startY = window.scrollY;

    // Конечная позиция прокрутки (document.body.scrollHeight - 700)
    var endY = document.body.scrollHeight - 700;

    // Время начала анимации
    var startTime = null;

    // Длительность анимации (в миллисекундах)
    var duration = 1500; // 1 секунда

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;

        // Прошедшее время с начала анимации
        var elapsed = timestamp - startTime;

        // Прогресс анимации (от 0 до 1)
        var progress = Math.min(elapsed / duration, 1);

        // Интерполяция между начальной и конечной позицией
        var scrolled = startY + (endY - startY) * progress;

        // Прокрутка страницы
        window.scrollTo(0, scrolled);

        // Продолжаем анимацию, пока не достигнем конца
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    // Запускаем анимацию
    requestAnimationFrame(animateScroll);
};


	// Скрипт для загрузки контейнера
    var container = document.getElementById('container');

    // Отложенное отображение контейнера после 2 секунд
    setTimeout(function() {
        // Удаление атрибута hidden, чтобы показать контейнер
        container.removeAttribute('hidden');
    }, 2000);


