const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'img/fon.png' },
    { id: 2, title: 'Mouse', price: 20, img: 'img/fon.png' },
    { id: 3, title: 'Keyboard', price: 200, img: 'img/fon.png' },
    { id: 4, title: 'Gamepad', price: 50, img: 'img/fon.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (feature) =>
    `<div class="product-item">
                <img src="${feature.img}" alt="">
                <h3>${feature.title}</h3>
                <p class= "price">Цена: ${feature.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)); //оптимизировал
    //убрав отдельные свойства объекта и отправляя в функцию весь объект, где уже
    //и выбирается необходимые свойства из объекта
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");// добавил
    //метод join(""), который объединяет все элементы массива в строку, убирая любые знаки между элементами
};

renderPage(products);