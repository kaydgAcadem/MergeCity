// Сохраняем изначальное значение user-scalable
const initialUserScalable = document.querySelector('meta[name="viewport"]').getAttribute('content');

function adjustScale() {
    // Меняем масштаб контейнера
    const content = document.querySelector('.container');
    if (window.orientation === 90 || window.orientation === -90) {
        // Временно разрешаем масштабирование, чтобы изменить его без ограничений
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');

        // Поднимаем .container на 50% вверх при альбомной ориентации
        content.style.transition = 'transform 0.5s ease-in-out';
		if (deviceType === 'Phone') {
        content.style.transform = 'translateY(-28%) scale(0.5)';
		}
    } else {
        // Возвращаем масштаб и позицию в портретной ориентации
        content.style.transition = 'transform 0.5s ease-in-out';
		if (deviceType === 'Phone') {
        content.style.transform = 'scale(1)';
		}
    }

    // Ждем некоторое время и восстанавливаем исходные настройки метатега user-scalable
    setTimeout(function() {
        document.querySelector('meta[name="viewport"]').setAttribute('content', initialUserScalable);
    }, 1000); // Время в миллисекундах
}

// Слушаем событие изменения ориентации экрана
window.addEventListener('orientationchange', adjustScale);

// Вызываем при загрузке страницы, чтобы сразу установить правильный масштаб
window.addEventListener('DOMContentLoaded', adjustScale);