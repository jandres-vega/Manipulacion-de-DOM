import Header from "./templates/Header";
import Home from "./pages/Home";
import {URL} from './util/urls';
import Cards from "./templates/Cards";
import router from "./routes";
import {filterCategory} from './services/filterByCategory'
import {addToFavorites} from './services/addToFavorites'
import {maxCarShopping} from './services/maxCartShopping'
import {getDataDb} from './util/getData';
import {modalShopping} from "./services/modalShopping";


const header = document.querySelector('.header');
const landing = document.querySelector('.landing');

header.innerHTML = Header();

const render = async () => {

    let dataProducts = await getDataDb(URL.products);
    landing.innerHTML = await Home();

    let productsDiv = document.querySelector('.products')
    productsDiv.innerHTML += await Cards(dataProducts)
    const valuesSpan = document.querySelectorAll('.value');
    valuesSpan.forEach((item) => item.addEventListener('click', filterCategory(item,productsDiv)))

    const btnCategories = document.querySelector('.btn-categories');

    btnCategories.addEventListener('click', async() => {
        productsDiv.innerHTML = await Cards(dataProducts);
    })

    let cardP = document.querySelectorAll('.modal-fav .fa-heart');
    cardP.forEach(item => item.addEventListener('click', addToFavorites(item)))

    const shopping = document.querySelectorAll('.input-card-dis');
    const max = document.querySelectorAll(`.btn-add .btn-plus-1`);
    const min = document.querySelectorAll('.btn-add .btn-minus-1');
    const btnAdd = document.querySelectorAll('.addShoppinCart');

    await maxCarShopping(max, shopping, btnAdd, min)

    const carShopping = document.querySelector('.cont-0 .fa-cart-shopping');
    const shoop = document.querySelector('.modal-Shopping');
    const items = document.querySelector('.item-info-checkout');

    carShopping.addEventListener('mouseover', modalShopping(shoop, items))

    shoop.addEventListener('mouseover', () => {
        shoop.style.display = 'block';
    })
    shoop.addEventListener('mouseout', () => {
        shoop.style.display = 'none';
    })
    carShopping.addEventListener('mouseout', () => {
        const shoop = document.querySelector('.modal-Shopping');
        shoop.style.display = 'none';
    })

}


window.addEventListener('load',render)
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
