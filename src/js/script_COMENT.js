window.addEventListener('DOMContentLoaded', () => { 
    //запиндюриил слушателя 
    //создаем переменные которые нам понадобятся для начала управления сайтом
    //первая переменная это табы(кнопки выбора еды) берем селектор алл чтобы всех 
    const   tabs =document.querySelectorAll('.tabheader__item'), //лучшее копировать селеторы с кода
            tabsContent = document.querySelectorAll('.tabcontent'), //клонтент менюшек
            tabsParent=document.querySelector('.tabheader__items');  //это роодитель кнопок будем делегировать обязанности  
//__________________________TABs__________________________________________________
    function hideTabContent (){
        tabsContent.forEach(item=>{
           //---ниже инлайн стили, после того как создали дополеньиетнае классы в ССС пробуем следать на классах
           // item.style.display='none';//берем все в переборе табы менюшки и скрываем их
           item.classList.add('hide');//это замена верхней строчке 
           item.classList.remove('show', 'fade'); //это то что вставили 
        });
        tabs.forEach(item => {//тут мы перебирая табы смотрим у кого есть селектор активности 
            item.classList.remove('tabheader__item_active');//и командой ремуы убираем его 
        });
    }
    //если выше мы убрали ктивность то здесь табу c i добавляем активность 
    function showTabContent (i=0){//вот тут Ай это переменная перебора, ей присвоиили значение по умолчанию 1 элем
        tabsContent[i].classList.add('show', 'fade');//это то что вставили 
        tabsContent[i].classList.remove('hide');//это то что вставили 
        //НИЖЕ ЭТО ТО ЧТО МЫ ЗАМЕНИЛИ ПОСЛЕ ВСТАВКИ КЛАССОВ 
        //tabsContent[i].style.display='block';// тут фиксируем на дисплее этот таб 
        tabs[i].classList.add('tabheader__item_active');//иставим в него селектор  активности 
        }
//выше мы только создали функции которые будут делать то или иное -------------------------------
hideTabContent();
showTabContent();// очень удобно использовать новый функционал это не передавать аргумент а использовать его в 
//функции по умолчанию то есть значение 
    tabsParent.addEventListener('click', (event)=>{ //слушаем клик на папке 
        const target = event.target;//ждем в папке цель Ивент 
            if (target && target.classList.contains('tabheader__item'))   //если цель есть и цель имееет селектор таба 
            {//тут в условии мы определяем номер элемента и всовываем в функцию показа элемента 
//чьлюы определить номер надо сравнить его который тапнулся под мышкой с элементами в массива tabs если это так то тогда показываем 
                tabs.forEach((item, i)=>{//перебираем массив табов при этом в перебор передаем два арг, то есть 
                    //перебираем элементы и смотрим его номер 
                    if (target==item){//и если цель мыши соответствует элементу массива то идем в тело а там функции 
                        hideTabContent();//тут мы сперва скрываем все а потом уже в шоу вставляем номер совпаденного таба 
                        showTabContent(i);//вот тут 
                    }                     
                });                 
            }
        });
//монтируем Timer_________________________________________
const deadline = '2022-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
//--урок 43 моадбнле окно 
//вешаем на блоки в хтмл дата атрибут data-modal кнопки ответственные за вызов модал окна 
//также вешаем и дата атрибут data-modal для закрытия data-close
const   modalTriger=document.querySelectorAll('[data-modal]'),//тут понятно все, вешаем на переменные какие то дивы
        modal   =document.querySelector('.modal');
        // ,   после создания модального окна ниже удалили эти две строки 
        // modalCloseBtn=document.querySelector('[data-close]');************************************************
//понадобятся две функцуии открытия и закрытия окна 
// modalTriger.forEach(btn =>{
//         btn.addEventListener('click', () => { //тут начинаем их слушать эти перременные и если она нажаласть то 
//         modal.classList.add('show'); //классу Модал присваиваем Шоу и убираем Хайд и на оборот
//         modal.classList.remove('hide');    //указанные шоу ии хайд команды их хтмл 
//         document.body.style.overflow='hidden';//оверфдлу на странице это прокрутка, ее ставим в скрыто, экраан замирает 
//         });     });
//если мы вызывваем уже окошко не единожды, то стоит сделать функцию на нее поэтому выше коментирую и ниже ставлю Ф
function openModal (){
        modal.classList.add('show'); 
        modal.classList.remove('hide');    
        document.body.style.overflow='hidden';
        clearInterval(modalTimerId); 
    } //внимание если поьлзователь уже открывал модальное окно то его не стоит и вызывать !!! 
modalTriger.forEach(btn =>{btn.addEventListener('click', openModal);});
//ниже сдучай еслии мы слушаем кнопкУ! если надо слушать кнопки то как выше 
// const   modalTriger=document.querySelector('[data-modal]');
// modalTriger.addEventListener('click', () => { //тут начинаем их слушать эти перременные и если она нажаласть то 
//     modal.classList.add('show'); //классу Модал присваиваем Шоу и убираем Хайд и на оборот
//     modal.classList.remove('hide');    //указанные шоу ии хайд команды их хтмл 
//     document.body.style.overflow='hidden';//оверфдлу на странице это прокрутка, ее ставим в скрыто, экраан замирает 
// });
function closeModal(){
    modal.classList.add('hide');    
    modal.classList.remove('show');
    document.body.style.overflow='';
}
//modalCloseBtn.addEventListener('click', closeModal); ****** после создания окна 
modal.addEventListener('click', (e) =>{
    if(e.target===modal || e.target.getAttribute('data-close')==''){
         closeModal();  }});
//ниже функция закрытия окна и функция закрытия по полю, они схожи, поэтому их устраняем заменой функции что выше !
// modalCloseBtn.addEventListener('click', () => {
//     modal.classList.add('hide');    
//     modal.classList.remove('show');
//     document.body.style.overflow='';//надо не забыть востановить скрол
// });
// //закрытие по подложе или ескейп 
// modal.addEventListener('click', (e) =>{//слушаем поле модал если клик то 
//     if(e.target===modal){//если цель клика равна модал то: 
//         modal.classList.add('hide');    
//         modal.classList.remove('show');
//         document.body.style.overflow='';
//         }});
//-----теперь настроим закрытие модалки при нажатии клавишми
document.addEventListener('keydown', (e)=>{
    if(e.code==="Escape" && modal.classList.contains('show')){closeModal();}});//как сделать тчобы это окно 
    //работало только если откно открыто, гы, поставить условие 
    //))) && modal.classList.contains('show')
//счс поработаем с тем чтобы на сайте всплывало окошко модальное , для начала создадим переменную 
const modalTimerId = setTimeout (openModal, 60000);
//теерь стиот отследить скрол и открыть окно 
// window.addEventListener('scroll', ()=> {
//     if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
//         openModal();}});
//--выше это то что мы счс реализуем в функции 
function showModalByScroll(){
    if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
        openModal();
        window.removeEventListener('scroll', showModalByScroll);//отключаем скрол во время модалки 
        }}
window.addEventListener('scroll', showModalByScroll);
//используем клаасссы для карточек )) _______________________________________________
class MenuCard {
    constructor (src, alt, title, descr, price, parentSelector, ...classes)//добавили рест оператор 
    {
        this.src=src;
        this.alt=alt;
        this.title=title;
        this.descr=descr;
        this.price=price;
        this.classes=classes;//тут тоже рест оператор, помним что это МАССИВ !!
        this.parent=document.querySelector(parentSelector);
        this.transfer=27;
        this.changeToUAH();
    }
    changeToUAH(){
        this.price=this.price*this.transfer;
    }
    render(){
        const element=document.createElement('div');
        //рендерим создаем объект, но в ресте нет определенности массива, значит его набо перебрать фоичем
        //но если в рест оператор ничего не пришло, то надо добавить условие, если не пришел название класса то поставь по умолчан
        if (this.classes.length===0) { //в итоге если длина класса 0, то 
            this.element='menu__item';//в наш элемент, нашего документа и карточки присваиваем значенеи  по умолчанию имя класса 
            element.classList.add();//и тут в элемент добавляем в класс лист 
        } else { //иначе делаем все как обычно 
            this.classes.forEach(className =>element.classList.add(className));//перебираем массив, и делаем с каждым объектом, что? 
        //в объекте const element обращаемся к его .classList и добавляем .add ему (className) любое имя, то есть каждый класс 
        //который будет находитться в этом массиве  
        }         
        element.innerHTML=`
                <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
                `;
        this.parent.append(element);
    }
}

const getResurse = async (url) => {
    let res = await fetch(url);
if(!res.ok){
    throw new Error (`Could not fetch ${url}, status:${res.status}`);
}
    return await res.json();
};

// getResurse('http://localhost:3000/menu')
// .then(data=>{
//     data.forEach(({img, altimg, title, descr, price}) =>{
//    new MenuCard(img, altimg, title, descr, price, ".menu .container").render(); //тут запрос на файл, он массив и перебирается, в ходе перебора рендерится 
//     });
// });
axios.get('http://localhost:3000/menu')
        .then(data=>{data.data.forEach(({img, altimg, title, descr, price}) => {
                        new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
                    });
                });

// //ТЕПЕРЬ КОД НИЖЕ МОЖНО УДАЛИТЬ !!!!!!!!
// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container', //вот наименования классов тут 
//     'menu__item', //тут 
//     'big'//и тут ради эксперимента, в итоге добавлен класс в коде хтмл   //menu__item big
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     14,
//     ".menu .container",
//     'menu__item'
// ).render();

// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     21,
//     ".menu .container",
//     'menu__item'
// ).render();

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add("menu__item");

    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector(".menu .container").append(element);
    //     });
    // }

// forms работа с формами в данном случае отправок ______________________________________________________________________
    const forms = document.querySelectorAll('form');//сканируем все теги форм выбираем их и вешаем на переменную 
    const messaGe ={//создадим заготовочку для оповещения пользователя о ходе событий 
        loading: 'img/form/spinner.svg', 
        succes:'Спасибо! Мы с Вами свяжемся в максимально короткое время',
        failure:'Что-то пошло не так...',
    };
    forms.forEach(item=>{//ниже мы описали что и как делать, а теперь мы сделаем чтобы это делалось. Итак все формы с документа 
        //находятся в переборе, и если с ними что то происходит действует Ф намиинаписанная потсдата 
        bindPostData(item);
    });

const postData = async (url, data)=>{
    const res = await fetch(url, {
method: "POST",
headers: {
    'Contetnt-type': 'application/json'
    }, 
    body: data
    });
    return await res.json();//эти два оператора организовывают асинхронное получение онии всегда вдвоем 
};

    function bindPostData (form){ //созд Ф которая принимает что то из вне в аргумент форм. приняв данный аргумент и какую то переменную или данные она  
        form.addEventListener('submit', (e) => { //слушает что происходит на формее, и ждет действия САБМИТ то есть отправки
            //есди я до последующего нажимал на отправку теСАБМИТ то страница перезагружалась, удалим это правило  
                e.preventDefault();//тут отключаем привычное поведение 
                const statusMassege = document.createElement('img');//тут создаем объект, который будет выводить сообщение 
                //хранящееся в нашем массиве сообщений  messaGe. и помещаем в этот объект создангие элемента верстки блока див 
                statusMassege.src=messaGe.loading; //обращаемся к созданному диву к его классам и создаем в нем ксласс СТАТУС
                statusMassege.style.cssText=`
                display: block;
                margin: 0 auto;
                `;//тут выводим путем Текстконтент сообщение из нашего мамссива Лоадинг
                form.insertAdjacentElement('afterend', statusMassege);//далее мы отправляем это сообщение и добавляем его к форме                 
                // const requeST= new XMLHttpRequest();//тут организовываем переменную в которую помещаем в нее метод, теперь эта переменная 
                // //становится методдом она будет что то делать c тем что примет 
                // requeST.open('POST', 'server.php');  //в наш метод теперь имеет бибилотеки от приобретенного метода используем метод опен  который примет 
                //такие аргементы как ПОСТ это метод отправки и путь на который мы будем сслыаться 
                //не забываем про то что мы готовимся отправить данные которые ввели в форму, то есть данные из фомры, пока мы просто 
                //подготавливаем среду, переменные и методы 
                //requeST.setRequestHeader ('Content-type', 'application/json');//тут реализован принцип каких данных происходит обммен
                //выше это если идет формат обмена JSON, тогда понадобится заголовок 
                //выше закоментил потому что так делать не нужно, так как это лишнее 
                //какой контент и его свойства 
                //Для данных которые введены в форму созд переменную 
                const formData = new FormData(form);//эту переменную помещаем метод для создания объекта,
                // в который помещаем то что пришло с формы, и передалось в виде аргумента в Ф данные еще не отправляли 
                //тут, ниже, прием перевода формы в Json данные 
               
                const json = JSON.stringify(Object.fromEntries(formData.entries()));//преобразовывает данные в массив, а потом массив в джейсон 
                // const object = {};//смотрите, мы создали объект, пока пустой, потом мы просто переберем форму и поместим ее в объект
                // formData.forEach(function (value, key){//тут перебираем то что поступило в форму formData перебор поступает в ВАЛЬЮ, 
                //     object[key]=value; //помещаем в объект обджект данные formData
                // });
               
                //const json =JSON.stringify(object) ; //эта переменная не нужна, ну чтобы было видно, то в нее помещаем переведенные в 
                // JSON данные из (object)
                //requeST.send(json);
                        //*********FETCH */
            // fetch('server.php', {method: "POST",
            //             headers: {'Content-type': 'application/json'},
            //             body:  JSON.stringify(object) });
                        postData('http://localhost:3000/requests', json)//сюда попадают данные уже переведенные в джейсон из 287
                //.then(data=>data.text())
                        .then(data => {
                    console.log(data);
                    showThanksModal(messaGe.succes);//                    
                    statusMassege.remove();})
                .catch (() => {showThanksModal(messaGe.failure);})
                .finally (()=>{form.reset();});
                //requeST.send(formData);//вот тут то мы отправляем то что получили, к нашей переменной применяем метод сенд
                //в сенд суем ТЕЛО, то есть то что получили из формы 
                // requeST.addEventListener('load', ()=> {//тут мы слушаем реквест на ЛОАД, то есть проверяем загружено ли то что отправляем 
                //     if(requeST.status===200)//если лоад прошел !хорошо это 200
                //     {console.log(requeST.response);
                //         showThanksModal(messaGe.succes);//
                //         form.reset();
                //         statusMassege.remove();
                //     }else{showThanksModal(messaGe.failure);}
                // });
        });
    }
//----модальное окно благодарности то есть конечное урок 54
    function showThanksModal(message){
        const previosModalDialog=document.querySelector('.modal__dialog');
        previosModalDialog.classList.add('hide');
        openModal();
        const thanksModal=document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML=`
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class= "modal__title">${message}</div>
        </div>`;//здесь мы создаем тот контент модальное окно которое будет дополнитлеьно выскакивать, но на крестик не булдет 
        //реагировать так как висит выше событие, в этой связи удалим их выше      
        document.querySelector('.modal').append(thanksModal); 
        setTimeout(()=>{
            thanksModal.remove();
            previosModalDialog.classList.add('show');
            previosModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
//lesson 58 
// fetch('http://localhost:3000/menu').then(data => data.json()).then(res => console.log(res));






//__граница DOMContentLoaded !!!!
});
