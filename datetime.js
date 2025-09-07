// datetime.js
// Функции для работы с датой и временем

// Расписание первой смены (урок, начало, конец в секундах от начала дня)
const firstShiftSchedule = [
    { lesson: 1, start: 8 * 3600, end: 8 * 3600 + 40 * 60, break: 10 * 60 }, // 8:00 - 8:40
    { lesson: 2, start: 8 * 3600 + 50 * 60, end: 9 * 3600 + 30 * 60, break: 15 * 60 }, // 8:50 - 9:30
    { lesson: 3, start: 9 * 3600 + 45 * 60, end: 10 * 3600 + 25 * 60, break: 15 * 60 }, // 9:45 - 10:25
    { lesson: 4, start: 10 * 3600 + 40 * 60, end: 11 * 3600 + 20 * 60, break: 10 * 60 }, // 10:40 - 11:20
    { lesson: 5, start: 11 * 3600 + 30 * 60, end: 12 * 3600 + 10 * 60, break: 5 * 60 }, // 11:30 - 12:10
    { lesson: 6, start: 12 * 3600 + 15 * 60, end: 12 * 3600 + 55 * 60, break: 5 * 60 }, // 12:15 - 12:55
    { lesson: 7, start: 13 * 3600, end: 13 * 3600 + 40 * 60, break: 0 } // 13:00 - 13:40
];

// Названия месяцев и дней недели на русском
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// Функция для форматирования времени (часы:минуты:секунды)
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

// Функция для определения текущего или следующего урока
function getCurrentLessonInfo() {
    const now = new Date();
    const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const currentDay = now.getDay(); // 0 - воскресенье, 1 - понедельник, etc.
    
    // Если сегодня выходной (воскресенье или суббота после 14:00), показываем время до первого урока в понедельник
    if (currentDay === 0 || (currentDay === 6 && currentTimeInSeconds > 13 * 3600 + 40 * 60)) {
        const nextMonday = new Date(now);
        const daysUntilMonday = currentDay === 0 ? 1 : 2;
        nextMonday.setDate(now.getDate() + daysUntilMonday);
        nextMonday.setHours(8, 0, 0, 0); // Устанавливаем на первый урок понедельника
        
        const timeDiff = Math.floor((nextMonday - now) / 1000); // разница в секундах
        return {
            status: 'weekend',
            message: `До уроков<br>${formatTime(timeDiff)}` // Убрано "в понедельник"
        };
    }
    
    // Если сейчас раньше первого урока
    if (currentTimeInSeconds < firstShiftSchedule[0].start) {
        const timeUntilFirstLesson = firstShiftSchedule[0].start - currentTimeInSeconds;
        return {
            status: 'before',
            message: `До первого урока<br>${formatTime(timeUntilFirstLesson)}`
        };
    }
    
    // Если сейчас после последнего урока
    if (currentTimeInSeconds > firstShiftSchedule[firstShiftSchedule.length - 1].end) {
        return {
            status: 'after',
            message: 'Уроки окончены'
        };
    }
    
    // Проверяем, идет ли сейчас урок
    for (const lesson of firstShiftSchedule) {
        if (currentTimeInSeconds >= lesson.start && currentTimeInSeconds <= lesson.end) {
            const timeLeft = lesson.end - currentTimeInSeconds;
            return {
                status: 'during',
                message: `До конца урока<br>${formatTime(timeLeft)}`,
                currentLesson: lesson.lesson
            };
        }
    }
    
    // Если сейчас перемена между уроками
    for (let i = 0; i < firstShiftSchedule.length - 1; i++) {
        if (currentTimeInSeconds > firstShiftSchedule[i].end && currentTimeInSeconds < firstShiftSchedule[i + 1].start) {
            const timeUntilNextLesson = firstShiftSchedule[i + 1].start - currentTimeInSeconds;
            return {
                status: 'break',
                message: `До ${i + 2} урока<br>${formatTime(timeUntilNextLesson)}`,
                nextLesson: i + 2
            };
        }
    }
    
    return {
        status: 'unknown',
        message: 'Расписание не найдено'
    };
}

// Функция для обновления времени на всех страницах
function updateDateTime() {
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    
    // Обновляем дату на странице dz.html
    const dayNumElement = document.querySelector('.dayNum');
    if (dayNumElement) {
        dayNumElement.textContent = `${dayOfWeek}. ${month} ${day}`;
    }
    
    // Обновляем дату на странице home.html
    const dayDateElement = document.querySelector('.dayDate');
    const dayNumHomeElement = document.querySelector('.dayNum');
    if (dayDateElement && dayNumHomeElement) {
        dayDateElement.textContent = dayOfWeek;
        dayNumHomeElement.textContent = `${month} ${day}`;
    }
    
    // Обновляем время до урока
    const lessonInfo = getCurrentLessonInfo();
    const timeElements = document.querySelectorAll('#current-time, .lessonTimeHome');
    
    timeElements.forEach(element => {
        element.innerHTML = lessonInfo.message;
    });
}

// Запускаем обновление времени при загрузке страницы и каждую секунду
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Обновлять каждую секунду
});