function sendRequst(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
    });

}

const API_URL = "http://localhost:3000";


const urlSingle = 'single_page.html';
const altImg = 'good';


    class GoodsItem {
        constructor(title, price, src) {
            this.title = title;
            this.price = price;
            this.src = src;
        }
        render() {
            return `<div class="item"><a href= ${urlSingle}><img src= ${this.src} alt=${altImg}><div class="item-text"><p>${this.title}</p><h3>$${this.price}</h3></div></a><a href="#cart" class="add">Add to Card</a></div>`;
        }
    }

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
    {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/1.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/2.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/Layer%204.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/4.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/5.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/6.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/7.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/8.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
             {
        title: 'MANGO PEOPLE T-SHIRT',
        price: 50,
        urlSingle: 'single_page.html',
        srcImg: 'img/1.png',
        altImg: 'MANGO PEOPLE T-SHIRT'
    },
    
]
    }
    render() {
        let listHtml = '';
            this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.srcImg == undefined ? 'img/NoPhoto.jpg' : good.srcImg); 
            listHtml += goodItem.render();
        });
        document.querySelector('.items').innerHTML = listHtml;
    }
    totalPrice () {
        let total = 0;
        this.goods.forEach(sum => total += sum.price);
        console.log('total = $' + total);
    }
}
const list = new GoodsList(); // Создаём экземпляр класса GoodsList
list.fetchGoods();
list.render();
list.totalPrice();

