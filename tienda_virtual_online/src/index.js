import {products, ordenado} from './info.js';

let search = document.querySelector('.div-search');

const sectionClothing = document.querySelector('.div-cards');

const card = document.createElement('div');
card.className = 'div-card-single'

let optionsCategory = document.querySelector('.div-select-options');
let optionsPrice = document.querySelector('.div-select-options-price');


sectionClothing.append(card);

let arrayItems = []
let aux = true
let containerCard
let category
let precio



products.productsEcommerce.forEach(item => {

    containerCard = document.createElement('div');
    containerCard.className = 'div-container-card';

    category = document.createElement('span')
    category.textContent = item.category

    let nameClothing = document.createElement('h3');
    nameClothing.textContent = item.nameProduct;

    let image = document.createElement('img');
    image.src = item.image

    precio = document.createElement('span');
    precio.textContent = `$${item.price}`;

    containerCard.append(nameClothing, image, precio, category);
    arrayItems.push(containerCard);
    category.style.visibility = 'hidden';
});
card.append(...arrayItems);

const searchProduct = () => {
    let input = search.value
    arrayItems.forEach(item => {
        if (item.children[0].firstChild.data.toLowerCase().indexOf(input.toLowerCase()) > -1) {
            item.style.display = ''
        }else {
            item.style.display = 'none'
        }
    })
    if (aux){
        let alert = document.createElement('h1')
        alert.textContent = "no se encuentra el articulo"
        card.appendChild(alert)
        aux = false
    }
}

let handleSelect = (e) => {
    e.preventDefault();
    arrayItems.forEach(item => {
        if (e.target.value === 'pants'){
            if (item.lastChild.textContent === e.target.value) item.style.display = ''
            else item.style.display = 'none'
        }else if(e.target.value === 'shirts') {
            if (item.lastChild.textContent === e.target.value) item.style.display = ''
            else item.style.display = 'none'
        }else if(e.target.value === 'shoes'){
            if (item.lastChild.textContent === e.target.value) item.style.display = ''
            else item.style.display = 'none'
        }else if (e.target.value === 'cat'){}
        else {
            item.style.display = ''
        }
    })
}

let handleSelectPrice = (e) => {

    let orden = e.target.value;
    if (orden === 'price') return null;
    else if (orden === 'menorMayor') {
        arrayItems.sort(function (a,b){
            let numberA = Number(a.childNodes[2].textContent.slice(1))
            let numberB = Number(b.childNodes[2].textContent.slice(1))
            return numberA - numberB

        })
        // for (let i = 0; i < arrayItems.length; i++) {
        //     card.appendChild(arrayItems[i]);
        // }
        arrayItems.forEach(item => {
            card.appendChild(item)
        })
    }else {
        arrayItems.sort(function (a,b){
            let numberA = Number(a.childNodes[2].textContent.slice(1))
            let numberB = Number(b.childNodes[2].textContent.slice(1))
            return numberB - numberA

        })
        // for (let i = 0; i < arrayItems.length; i++) {
        //     card.appendChild(arrayItems[i]);
        // }
        arrayItems.forEach(item => {
            card.appendChild(item)
        })
    }

}

search.addEventListener('keyup', searchProduct);
optionsCategory.addEventListener('click', handleSelect);
optionsPrice.addEventListener('click', handleSelectPrice)






