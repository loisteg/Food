import {getResources} from '../services/services';


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

    getResources('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({src, alt, title, descr, price}) => {
            new Cards(src, alt, title, descr, price, '.menu .container').render();
        });
    });

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({src, alt, title, descr, price}) => {
    //             new Cards(src, alt, title, descr, price, '.menu .container').render();          // Variant with Axios
    //         });
    //     });
}

// module.exports = cards;
export default cards;