//Определяем тип устройства		
function defineDeviceType() {
    const ua = navigator.userAgent;
    if (/(Windows|Macintosh|tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'NoPhone';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'Phone';
    }
}
const deviceType = defineDeviceType();	
console.log('Тип устройства:', deviceType);


//Определяем платформу устройства
function definePlatformType() {
    const ua = navigator.userAgent;
    if (/Macintosh|iP(hone|od)|IOS|Mac OS/i.test(ua)) {
        return 'Mac';
    }
    else {
        return 'NoMac';
    }
}
const platformType = definePlatformType();	
console.log('Тип устройства:',platformType);		


//Меняем стили если устройство Mac
// Массив с классами элементов, к которым нужно применить новые стили
var elementClasses = ['score', 'end-game']; // Замените на ваши реальные классы элементов
// Перебор массива классов и применение стилей к каждому элементу
elementClasses.forEach(function(className) {
    var elements = document.querySelectorAll('.' + className); // Получаем все элементы с указанным классом
    elements.forEach(function(element) {
        if (platformType === 'Mac') {
            element.style.animation = 'neonBlinkIOS 2s infinite alternate'; // Устанавливаем новую анимацию для macOS
        }
    });
});

var elementIds = ['usercard']; // Замените на ваши реальные ID элементов
// Перебор массива ID и применение стилей к каждому элементу
elementIds.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) { // Проверяем, существует ли элемент с таким ID
        if (platformType === 'Mac') {
            element.style.setProperty('text-shadow', '0 0 1px #fff, 0 0 4px #fff, 0 0 8px #0fa, 0 0 13px #0fa, 0 0 19px #00ffd0, 0 0 26px #00ffd0', 'important');
		}
    } 
});
