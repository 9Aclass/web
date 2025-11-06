var qarterNum = 2;

var dzAlgb = true
var dzAngl = true
var dzBiol = true
var dzGeogr = true
var dzGeom = true
var dzInfo = true
var dzIstor = true
var dzLitr = true
var dzObsh = true
var dzObizr = true
var dzRus = true
var dzFiz = true
var dzHim = true
var dzTrud = true
var selectVision = true



function selectSubject(){
    let arrow = document.getElementById("arrow")
    let innerDz = document.getElementById("subjectSelectorSubjects")

    if(selectVision === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        selectVision = true
    }

    else if(selectVision === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        selectVision = false
    }
}

function dzAlgbF(){
    let arrow = document.getElementById("algbArrow")
    let innerDz = document.getElementById("algbDzInner")

    if(dzAlgb === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzAlgb = true
    }

    else if(dzAlgb === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzAlgb = false
    }
}

// Английский
function dzAnglF(){
    let arrow = document.getElementById("anglArrow")
    let innerDz = document.getElementById("anglDzInner")

    if(dzAngl === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzAngl = true
    }
    else if(dzAngl === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzAngl = false
    }
}

// Биология
function dzBiolF(){
    let arrow = document.getElementById("biolArrow")
    let innerDz = document.getElementById("biolDzInner")

    if(dzBiol === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzBiol = true
    }
    else if(dzBiol === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzBiol = false
    }
}

// География
function dzGeogrF(){
    let arrow = document.getElementById("geogrArrow")
    let innerDz = document.getElementById("geogrDzInner")

    if(dzGeogr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzGeogr = true
    }
    else if(dzGeogr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzGeogr = false
    }
}

// Геометрия
function dzGeomF(){
    let arrow = document.getElementById("geomArrow")
    let innerDz = document.getElementById("geomInner")

    if(dzGeom === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzGeom = true
    }
    else if(dzGeom === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzGeom = false
    }
}

// Информатика
function dzInfoF(){
    let arrow = document.getElementById("infoArrow")
    let innerDz = document.getElementById("infoDzInner")

    if(dzInfo === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzInfo = true
    }
    else if(dzInfo === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzInfo = false
    }
}

// История
function dzIstorF(){
    let arrow = document.getElementById("istorArrow")
    let innerDz = document.getElementById("istorDzInner")

    if(dzIstor === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzIstor = true
    }
    else if(dzIstor === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzIstor = false
    }
}

// Литература
function dzLitrF(){
    let arrow = document.getElementById("litrArrow")
    let innerDz = document.getElementById("litrDzInner")

    if(dzLitr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzLitr = true
    }
    else if(dzLitr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzLitr = false
    }
}

// Обществознание
function dzObshF(){
    let arrow = document.getElementById("obshArrow")
    let innerDz = document.getElementById("obshDzInner")

    if(dzObsh === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzObsh = true
    }
    else if(dzObsh === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzObsh = false
    }
}

// ОбиЗр
function dzObizrF(){
    let arrow = document.getElementById("obizrArrow")
    let innerDz = document.getElementById("obizrDzInner")

    if(dzObizr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzObizr = true
    }
    else if(dzObizr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzObizr = false
    }
}

// Русский язык
function dzRusF(){
    let arrow = document.getElementById("rusArrow")
    let innerDz = document.getElementById("rusDzInner")

    if(dzRus === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzRus = true
    }
    else if(dzRus === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzRus = false
    }
}

// Труды
function dzTrudF(){
    let arrow = document.getElementById("trudArrow")
    let innerDz = document.getElementById("trudDzInner")

    if(dzTrud === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzTrud = true
    }
    else if(dzTrud === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzTrud = false
    }
}

// Физика
function dzFizF(){
    let arrow = document.getElementById("fizArrow")
    let innerDz = document.getElementById("fizDzInner")

    if(dzFiz === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzFiz = true
    }
    else if(dzFiz === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzFiz = false
    }
}

// Химия
function dzHimF(){
    let arrow = document.getElementById("himArrow")
    let innerDz = document.getElementById("himDzInner")

    if(dzHim === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzHim = true
    }
    else if(dzHim === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzHim = false
    }
}

// ВиС
function dzVisF(){
    let arrow = document.getElementById("visArrow")
    let innerDz = document.getElementById("visDzInner")

    if(dzHim === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzHim = true
    }
    else if(dzHim === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzHim = false
    }
}

// Вторая четверть

function selectSubject2(){
    let arrow = document.getElementById("arrow2")
    let innerDz = document.getElementById("subjectSelectorSubjects2")

    if(selectVision === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        selectVision = true
    }

    else if(selectVision === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        selectVision = false
    }
}

function dzAlgbF2(){
    let arrow = document.getElementById("algbArrow2")
    let innerDz = document.getElementById("algbDzInner2")

    if(dzAlgb === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzAlgb = true
    }

    else if(dzAlgb === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzAlgb = false
    }
}

// Английский
function dzAnglF2(){
    let arrow = document.getElementById("anglArrow2")
    let innerDz = document.getElementById("anglDzInner2")

    if(dzAngl === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzAngl = true
    }
    else if(dzAngl === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzAngl = false
    }
}

// Биология
function dzBiolF2(){
    let arrow = document.getElementById("biolArrow2")
    let innerDz = document.getElementById("biolDzInner2")

    if(dzBiol === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzBiol = true
    }
    else if(dzBiol === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzBiol = false
    }
}

// География
function dzGeogrF2(){
    let arrow = document.getElementById("geogrArrow2")
    let innerDz = document.getElementById("geogrDzInner2")

    if(dzGeogr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzGeogr = true
    }
    else if(dzGeogr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzGeogr = false
    }
}

// Геометрия
function dzGeomF2(){
    let arrow = document.getElementById("geomArrow2")
    let innerDz = document.getElementById("geomInner2")

    if(dzGeom === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzGeom = true
    }
    else if(dzGeom === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzGeom = false
    }
}

// Информатика
function dzInfoF2(){
    let arrow = document.getElementById("infoArrow2")
    let innerDz = document.getElementById("infoDzInner2")

    if(dzInfo === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzInfo = true
    }
    else if(dzInfo === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzInfo = false
    }
}

// История
function dzIstorF2(){
    let arrow = document.getElementById("istorArrow2")
    let innerDz = document.getElementById("istorDzInner2")

    if(dzIstor === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzIstor = true
    }
    else if(dzIstor === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzIstor = false
    }
}

// Литература
function dzLitrF2(){
    let arrow = document.getElementById("litrArrow2")
    let innerDz = document.getElementById("litrDzInner2")

    if(dzLitr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzLitr = true
    }
    else if(dzLitr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzLitr = false
    }
}

// Обществознание
function dzObshF2(){
    let arrow = document.getElementById("obshArrow2")
    let innerDz = document.getElementById("obshDzInner2")

    if(dzObsh === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzObsh = true
    }
    else if(dzObsh === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzObsh = false
    }
}

// ОбиЗр
function dzObizrF2(){
    let arrow = document.getElementById("obizrArrow2")
    let innerDz = document.getElementById("obizrDzInner2")

    if(dzObizr === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzObizr = true
    }
    else if(dzObizr === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzObizr = false
    }
}

// Русский язык
function dzRusF2(){
    let arrow = document.getElementById("rusArrow2")
    let innerDz = document.getElementById("rusDzInner2")

    if(dzRus === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzRus = true
    }
    else if(dzRus === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzRus = false
    }
}

// Труды
function dzTrudF2(){
    let arrow = document.getElementById("trudArrow2")
    let innerDz = document.getElementById("trudDzInner2")

    if(dzTrud === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzTrud = true
    }
    else if(dzTrud === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzTrud = false
    }
}

// Физика
function dzFizF2(){
    let arrow = document.getElementById("fizArrow2")
    let innerDz = document.getElementById("fizDzInner2")

    if(dzFiz === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzFiz = true
    }
    else if(dzFiz === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzFiz = false
    }
}

// Химия
function dzHimF2(){
    let arrow = document.getElementById("himArrow2")
    let innerDz = document.getElementById("himDzInner2")

    if(dzHim === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzHim = true
    }
    else if(dzHim === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzHim = false
    }
}

// ВиС
function dzVisF2(){
    let arrow = document.getElementById("visArrow2")
    let innerDz = document.getElementById("visDzInner2")

    if(dzHim === false){
        arrow.style.transform = "rotate(90deg)"
        innerDz.style.display = "none"
        dzHim = true
    }
    else if(dzHim === true){
        arrow.style.transform = "rotate(-90deg)"
        innerDz.style.display = "flex"
        dzHim = false
    }
}

function openDzTab() {
   window.location.href = ("dz.html");
}

function openInquiryTab(){
    window.location.href = ("inquiry.html");
}

function openBooksTab(){
    window.location.href = ("books.html");
}

function openCalcTab(){
    window.location.href = ("calc.html");
}

function litraGdz(){
    alert("Зачем тебе гдз по литературе?")
}

function fizGdz(){
    alert("Задание лучше загуглить, на сайте непонятное расположение")
}

function moreTxtRun() {
    const buttonForMoreTxt = document.getElementById('moreTxt');
    const navigMonth = document.getElementById('strokes');
    
    const isVisible = navigMonth.style.display === "block";
    
    navigMonth.style.display = isVisible ? "none" : "block";
    buttonForMoreTxt.innerHTML = isVisible ? "Показать больше" : "Показать меньше";
}

function qarterVisible(direction){
    var qarterInfo = document.getElementById('quarter')
    var qarter1 = document.getElementById('firstQuarter')
    var qarter2 = document.getElementById('secondQuarter')
    var qarter3 = document.getElementById('thirdQuarter')
    var qarter4 = document.getElementById('fourthQuarter')

    if(direction === "right" && qarterNum !== 4){
        qarterNum++
    }

    if(direction === "left" && qarterNum !== 1){
        qarterNum--
    }

    if(direction !== "left" && direction !== "right"){
        if(direction === "first"){
            qarterNum = 1
            qarter2.style.display = "none"
            qarter3.style.display = "none"
            qarter4.style.display = "none"

            qarter1.style.display = "flex"
            qarterInfo.textContent = "Первая четверть"
        }

        if(direction === "second"){
            qarterNum = 2
            qarter1.style.display = "none"
            qarter3.style.display = "none"
            qarter4.style.display = "none"

            qarter2.style.display = "flex"
            qarterInfo.textContent = "Вторая четверть"
        }

        if(direction === "third"){
            qarterNum = 3
            qarter1.style.display = "none"
            qarter2.style.display = "none"
            qarter4.style.display = "none"

            qarter3.style.display = "flex"
            qarterInfo.textContent = "Третья четверть"
        }

        if(direction === "fourth"){
            qarterNum = 4
            qarter1.style.display = "none"
            qarter2.style.display = "none"
            qarter3.style.display = "none"

            qarter4.style.display = "flex"
            qarterInfo.textContent = "Четвертая четверть"
        }
    }

    if(direction === "left" || direction === "right"){
        if(qarterNum === 1){
            qarter2.style.display = "none"
            qarter3.style.display = "none"
            qarter4.style.display = "none"

            qarter1.style.display = "flex"
            qarterInfo.textContent = "Первая четверть"
        }
    
        if(qarterNum === 2){
            qarter1.style.display = "none"
            qarter3.style.display = "none"
            qarter4.style.display = "none"

            qarter2.style.display = "flex"
            qarterInfo.textContent = "Вторая четверть"
        }

        if(qarterNum === 3){
            qarter1.style.display = "none"
            qarter2.style.display = "none"
            qarter4.style.display = "none"

            qarter3.style.display = "flex"
            qarterInfo.textContent = "Третья четверть"
        }

        if(qarterNum === 4){
            qarter1.style.display = "none"
            qarter2.style.display = "none"
            qarter3.style.display = "none"

            qarter4.style.display = "flex"
            qarterInfo.textContent = "Четвертая четверть"
        }
    }
}

function toggleMenu(event) {
    const menu = document.getElementById('contextMenu');
    const button = document.getElementById('quarter');
    
    event.stopPropagation();
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.top = (event.clientY + window.scrollY) + 'px';
        menu.style.left = (event.clientX + window.scrollX) + 'px';
        menu.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('contextMenu');
    const button = document.getElementById('quarter');
    
    if (!menu.contains(event.target) && event.target !== button) {
        menu.style.display = 'none';
    }
});

async function downloadFile(subject){
    if(subject === "algb"){
        alert("Файл слишком большой.")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=25879';
        link.download = 'Алгебра_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "angl"){
        alert("Файл слишком большой. Учебник за 2023г")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=25476';
        link.download = 'Английский_9.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "biol"){
        const link = document.createElement('a');
        link.href = 'books/_-8-klass_-pasechnik-v_-v_-kamenskij-a_-a_-2022.pdf';
        link.download = 'Биология_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "geogr"){
        alert("Файл слишком большой.")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=25696';
        link.download = 'География_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "geom"){
        alert("Учебник не найден :(")
    }

    if(subject === "inf"){
        alert("Файл слишком большой. Учебник за 2017г")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=23718';
        link.download = 'Информатика_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "istr"){
        alert("Учебник не найден :(")
    }

    if(subject === "litra1"){
        alert("Файл слишком большой. Учебник за 2013г")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=11635';
        link.download = 'Литература1_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "litra2"){
        alert("Учебник не найден :(")
    }

    if(subject === "obsh"){
        const link = document.createElement('a');
        link.href = 'books/bogolubov_l__obshestvoznanie_9_klass_4.pdf';
        link.download = 'Обществознание_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "obizr"){
        alert("Учебник не найден :(")
    }

    if(subject === "rus"){
        const link = document.createElement('a');
        link.href = 'books/Русский язык. 9 класс (Л. А. Тростенцова Т. А. Ладыженская А. Д. Дейкина и др.).pdf';
        link.download = 'Русский язык_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "fiz"){
        const link = document.createElement('a');
        link.href = 'books/Fizika_9_klass.pdf';
        link.download = 'Физика_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "him"){
        alert("Файл слишком большой.")
        const link = document.createElement('a');
        link.href = 'https://go.11klasov.net/index.php?do=download&id=19496';
        link.download = 'Химия_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function calc(){
    alert("Такой страницы пока нет. Потом сделаю, к концу четверти")
}

function support(){
    alert("По воводу сайта писать на почту: a21class.website@gmail.com")
}

function saveCheckboxState(subject, isChecked) {
    localStorage.setItem(`homework_${subject}`, isChecked);
}

// Функция для загрузки состояния галочки
function loadCheckboxState(subject) {
    return localStorage.getItem(`homework_${subject}`) === 'true';
}

