import {products} from './modules/info.js';
import { searchProduct, handleSelectPrice, handleSelect } from './modules/index.js';

let arrayItems = []
let containerCard
let category
let precio
let addButton
let cont = 0

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


const card = document.createElement('div');
card.className = 'div-card-single'
card.append(...arrayItems);

const sectionClothing = document.querySelector('.div-cards');
sectionClothing.append(card);

let search = document.querySelector('.div-search');
search.addEventListener('keyup', searchProduct(arrayItems))

let optionsPrice = document.querySelector('.div-select-options-price');
optionsPrice.addEventListener('click', handleSelectPrice(arrayItems, card));

let optionsCategory = document.querySelector('.div-select-options');
optionsCategory.addEventListener('click', handleSelect(arrayItems));

//------------------------------------------------------------------




