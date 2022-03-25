import {getResources} from '../services/services';
import data from '../../db.json';


function cards() {

    class Cards {
        constructor(src, alt, title, desrc, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desrc = desrc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length == 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = ` 
                <img src=${this.src} alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                
                <div class="menu__item-descr">${this.desrc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new Cards("img/tabs/vegy.jpg", "vegy", "Меню 'Фитнес'", "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", 9, '.menu .container').render();
    new Cards("img/tabs/post.jpg", "post", "Меню 'Постное'", "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 14, '.menu .container').render();
    new Cards("img/tabs/elite.jpg", "elite", "Меню 'Премиум'", "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 21, '.menu .container').render();


    // console.log(data) 

    // data.forEach(({src, alt, title, descr, price}) => {
    //     new Cards(src, alt, title, descr, price, '.menu .container').render();
    // });

    // getResources('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({src, alt, title, descr, price}) => {
    //         new Cards(src, alt, title, descr, price, '.menu .container').render();
    //     });
    // });

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({src, alt, title, descr, price}) => {
    //             new Cards(src, alt, title, descr, price, '.menu .container').render();          // Variant with Axios
    //         });
    //     });
}

// module.exports = cards;
export default cards;