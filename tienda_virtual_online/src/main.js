//importo el objeto que contiene todos los productos a renderizar
import {products} from './modules/info.js';

//importo algunas funciones que va a tener el e-commerce
import { searchProduct, handleSelectPrice, handleSelect } from './modules/index.js';

//array que va tener todos los productos con sus caracteristicas
let arrayItems = []
// esta es una variable que va a encerrar a cada producto en su defecto va ser un div
let containerCard
// esta es una variable que va a tomar como etiqueta un span con su valor de categoria
let category
// esta es una variable que va a tomar como etiqueta un span con su valor de price
let precio
//es una variable que va a tomar como etiqueta un button que se encargara de agregar productos al carrito
let addButton
//este un valor que nos va servir como contador
let cont = 0

//aquie recorro todos los productos para poder acceder a sus datos y renderizarlos
products.productsEcommerce.forEach(item => {

    containerCard = document.createElement('div');
    containerCard.className = 'div-container-card';

    category = document.createElement('span')
    category.textContent = item.category

    let nameClothing = document.createElement('h3');
    nameClothing.textContent = item.nameProduct;

    let image = document.createElement('img');
    image.src = item.image

    addButton = document.createElement('button')
    addButton.textContent = 'ADD'
    addButton.className = 'addButton'
    addButton.addEventListener('click', (e) => {
        e.preventDefault()
        let contador = document.querySelector('.cont');
        cont = cont + 1
        contador.innerHTML = cont
    })

    precio = document.createElement('span');
    precio.textContent = `$${item.price}`;

    containerCard.append(nameClothing, image, precio, category, addButton);
    arrayItems.push(containerCard);
    category.style.visibility = 'hidden';
});

//aqui los agrego al documento DOM
const card = document.createElement('div');
card.className = 'div-card-single'
card.append(...arrayItems);

const sectionClothing = document.querySelector('.div-cards');
sectionClothing.append(card);

//Aqui le agrego un evento al input search
let search = document.querySelector('.div-search');
search.addEventListener('keyup', searchProduct(arrayItems))

//Aqui le agrego un evento al select para ordenar los productos
let optionsPrice = document.querySelector('.div-select-options-price');
optionsPrice.addEventListener('click', handleSelectPrice(arrayItems, card));

//aqui agrego el evento a select de categorias
let optionsCategory = document.querySelector('.div-select-options');
optionsCategory.addEventListener('click', handleSelect(arrayItems));

//------------------------------------------------------------------




