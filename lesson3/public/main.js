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

class Item {
    constructor(id, name, price, image, color, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.color = color;
        this.size = size;
    }

    render() {
        return `<div class="item">
                    <div class="fetured-item1">
                        <a href="#" class="fetured-item">
                           <img src="${this.image}" alt="fetured-items">
                           <div class="item-text">
                               <p class="name-item">${this.name}</p>
                               <p class="pink-item">$${this.price}</p>
                           </div>
                        </a>
                    </div>
                    <div class="add">
                        <a href="#" class="add-to-card" data-id="${this.id}" data-name="${this.name}" data-price="${this.price}" data-image="${this.image}" data-color="${this.color}" data-size="${this.size}">
                        <img class="cart-white" src="img/cart.png" alt="cart">Add to Cart</a>
                    </div>
                </div>`;
    }
}

class ItemsList {
    constructor() {
        this.items = [];
    }

    fetchItems() {
        return new Promise((resolve) => {
            resolve(sendRequst(`${API_URL}/items`).then(
                (items) => {
                    this.items = items.map(item => new Item(item.id, item.name, item.price, item.image, item.color, item.size));
                }
            ));
        });
    }

    calculateSum() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    render() {
        const itemsHtmls = this.items.map(item => item.render());
        return itemsHtmls.join("");
    }
}





   


const items = new ItemsList();
items.fetchItems().then(
    () => {
        document.querySelector(".fetured-items-box").innerHTML = items.render();
    }
);



const $buttonAdd = document.querySelector(".fetured-items-box");
$buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") return;
    const data = event.target.dataset;
    console.log('Добавлено');
});







