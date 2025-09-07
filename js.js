var qarterNum = 1;

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
        const link = document.createElement('a');
        link.href = 'books/_9_klass_makarychev_ju_n_i_dr_2023.pdf';
        link.download = 'Алгебра_9.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if(subject === "angl"){
        const link = document.createElement('a');
        link.href = 'books/angl_jazyk_-spotlight_-uchebnik_-9-kl_-vaulina.pdf';
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
        const link = document.createElement('a');
        link.href = 'books/alekseev_a__geografia_9_klass_10.pdf';
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
        const link = document.createElement('a');
        link.href = 'books/informatika_-9kl__bosova-l_l_2017-208s.pdf';
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
        const link = document.createElement('a');
        link.href = 'books/21387_c29ec318c1cccaecc1f9183e07582b5c.pdf';
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
        const link = document.createElement('a');
        link.href = 'books/himija-9-kl_-gabrieljan.pdf';
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