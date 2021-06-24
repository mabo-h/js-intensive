class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
    getSum() {
        let s = 0;
        this.goods.forEach(item => {
            s += item.price;
        })

        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }

        let res = this.allProducts.reduce((sum, item) => sum + item.price, 0);
        alert(res);
    }
}

class ProductItem {
    constructor(product, img = 'img/fon.png') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;

    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
            <img src="${this.img}" alt="">
            <h3>${this.title}</h3>
            <p class= "price">Цена: ${this.price} руб.</p>
            <button class="buy-btn">Купить</button>
        </div>`
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }

}