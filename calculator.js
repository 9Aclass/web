// calculator.js
document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    const inputField = document.getElementById('inputBalls');
    const calculateBtn = document.querySelector('.addBallsButton');
    const srBallElement = document.getElementById('srBall');
    const srBallSpan = document.querySelector('.srBallSpan');
    const itogBallElement = document.querySelector('.itogBall span');
    const ballsCountElement = document.querySelector('.BallsCount span');
    
    // Элементы для исправления на 5
    const correction5Need5Num = document.getElementById('correction5Need5Num');
    
    // Элементы для исправления на 4
    const correction4Need5Num = document.getElementById('correction4Need5Num');
    const correction4Need4Num = document.getElementById('correction4Need4Num');
    
    // Элементы для исправления на 3
    const correction3Need5Num = document.getElementById('correction3Need5Num');
    const correction3Need4Num = document.getElementById('correction3Need4Num');
    const correction3Need3Num = document.getElementById('correction3Need3Num');
    
    // Переменные для хранения данных
    let grades = [];
    let average = 0;
    let finalGrade = 0;
    let gradeCount = 0;
    
    // Функция для расчета среднего арифметического
    function calculateAverage(arr) {
        if (arr.length === 0) return 0;
        const sum = arr.reduce((total, grade) => total + grade, 0);
        return sum / arr.length;
    }
    
    // Функция для округления итогового балла
    function roundFinalGrade(avg) {
        return Math.round(avg);
    }
    
    // Функция для обновления отображения результатов
    function updateResults() {
        // Обновляем средний балл (с двумя знаками после запятой)
        srBallElement.innerHTML = `<span class="srBallSpan">▶</span>${average.toFixed(2)}`;
        
        // Обновляем итоговый балл (без запятой, целое число)
        itogBallElement.textContent = finalGrade;
        
        // Обновляем количество оценок (без запятой, целое число)
        ballsCountElement.textContent = gradeCount;
        
        // Обновляем информацию о необходимых оценках для исправления
        updateCorrectionInfo();
    }
    
    // Функция для расчета необходимых оценок для исправления
    function updateCorrectionInfo() {
        // Исправление на 5
        updateCorrectionTo5();
        
        // Исправление на 4
        updateCorrectionTo4();
        
        // Исправление на 3
        updateCorrectionTo3();
    }
    
    // Функция для расчета необходимых оценок для исправления на 5
    function updateCorrectionTo5() {
        if (finalGrade >= 5) {
            correction5Need5Num.textContent = "✕";
            return;
        }
        
        // Рассчитываем минимальное количество каждой оценки для достижения среднего >= 4.5
        
        // Для пятерок
        let needed5For5 = calculateNeededForTarget(5, 4.5);
        
        correction5Need5Num.textContent = needed5For5;
    }
    
    // Функция для расчета необходимых оценок для исправления на 4
    function updateCorrectionTo4() {
        if (finalGrade >= 4) {
            correction4Need5Num.textContent = "✕";
            correction4Need4Num.textContent = "✕";
            return;
        }
        
        // Рассчитываем минимальное количество каждой оценки для достижения среднего >= 3.5
        
        // Для пятерок
        let needed5For4 = calculateNeededForTarget(5, 3.5);
        
        // Для четверок
        let needed4For4 = calculateNeededForTarget(4, 3.5);
        
        correction4Need5Num.textContent = needed5For4;
        correction4Need4Num.textContent = needed4For4;
    }
    
    // Функция для расчета необходимых оценок для исправления на 3
    function updateCorrectionTo3() {
        if (finalGrade >= 3) {
            correction3Need5Num.textContent = "✕";
            correction3Need4Num.textContent = "✕";
            correction3Need3Num.textContent = "✕";
            return;
        }
        
        // Рассчитываем минимальное количество каждой оценки для достижения среднего >= 2.5
        
        // Для пятерок
        let needed5For3 = calculateNeededForTarget(5, 2.5);
        
        // Для четверок
        let needed4For3 = calculateNeededForTarget(4, 2.5);
        
        // Для троек
        let needed3For3 = calculateNeededForTarget(3, 2.5);
        
        correction3Need5Num.textContent = needed5For3;
        correction3Need4Num.textContent = needed4For3;
        correction3Need3Num.textContent = needed3For3;
    }
    
    // Общая функция для расчета количества оценок определенного типа для достижения цели
    function calculateNeededForTarget(gradeValue, targetAverage) {
        if (grades.length === 0) return 0;
        
        let currentSum = grades.reduce((sum, grade) => sum + grade, 0);
        let currentCount = grades.length;
        
        let neededGrades = 0;
        
        while (true) {
            neededGrades++;
            let newAverage = (currentSum + gradeValue * neededGrades) / (currentCount + neededGrades);
            if (newAverage >= targetAverage) {
                return neededGrades;
            }
        }
    }
    
    // Функция для добавления оценок в поле ввода
    function addGradesToInput(grade, count) {
        if (count <= 0 || count === "✕") return;
        
        let currentValue = inputField.value;
        for (let i = 0; i < count; i++) {
            currentValue += grade;
        }
        inputField.value = currentValue;
    }
    
    // Функция для обработки ввода и расчета
    function processInput() {
        const inputValue = inputField.value.trim();
        
        if (inputValue === '') {
            alert('Пожалуйста, введите оценки');
            return;
        }
        
        // Преобразуем строку в массив чисел
        grades = inputValue.split('').map(char => {
            const num = parseInt(char);
            return (num >= 2 && num <= 5) ? num : 0;
        }).filter(num => num > 0); // Убираем невалидные оценки
        
        if (grades.length === 0) {
            alert('Пожалуйста, введите оценки от 2 до 5');
            return;
        }
        
        // Выполняем расчеты
        gradeCount = grades.length; // Уже целое число
        average = calculateAverage(grades);
        finalGrade = roundFinalGrade(average); // Уже целое число
        
        // Обновляем отображение
        updateResults();
    }
    
    // Назначаем обработчики событий
    calculateBtn.addEventListener('click', processInput);
    
    // Также можно обрабатывать нажатие Enter в поле ввода
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processInput();
        }
    });
    
    // Создаем правильные привязки для кнопок "+" после загрузки DOM
    setTimeout(function() {
        // Находим все кнопки "+" в правильном порядке
        const plusButtons = document.querySelectorAll('.correctionAddBall');
        
        // Блок 1: Исправить на 5 (1 кнопка)
        if (plusButtons[0]) {
            plusButtons[0].addEventListener('click', function() {
                const countText = correction5Need5Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(5, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
        
        // Блок 2: Исправить на 4 (2 кнопки)
        // Первая кнопка в блоке - для пятерок (первая строка)
        if (plusButtons[1]) {
            plusButtons[1].addEventListener('click', function() {
                const countText = correction4Need5Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(5, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
        
        // Вторая кнопка в блоке - для четверок (вторая строка)
        if (plusButtons[2]) {
            plusButtons[2].addEventListener('click', function() {
                const countText = correction4Need4Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(4, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
        
        // Блок 3: Исправить на 3 (3 кнопки)
        // Первая кнопка в блоке - для пятерок (первая строка)
        if (plusButtons[3]) {
            plusButtons[3].addEventListener('click', function() {
                const countText = correction3Need5Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(5, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
        
        // Вторая кнопка в блоке - для четверок (вторая строка)
        if (plusButtons[4]) {
            plusButtons[4].addEventListener('click', function() {
                const countText = correction3Need4Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(4, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
        
        // Третья кнопка в блоке - для троек (третья строка)
        if (plusButtons[5]) {
            plusButtons[5].addEventListener('click', function() {
                const countText = correction3Need3Num.textContent;
                if (countText !== "✕") {
                    const count = parseInt(countText);
                    if (!isNaN(count) && count > 0) {
                        addGradesToInput(3, count);
                        setTimeout(processInput, 100);
                    }
                }
            });
        }
    }, 100);
    
    // Инициализация при загрузке страницы
    // Устанавливаем начальные значения без запятой
    itogBallElement.textContent = "0";
    ballsCountElement.textContent = "0";
});