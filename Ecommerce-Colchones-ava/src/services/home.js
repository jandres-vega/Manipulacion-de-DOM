import {products} from "../info/info.js";
import {searchProduct} from "./main.js";
import {handleFavorite} from "./main.js";

let cards = document.querySelector('.cards')

let arrayVendidos = [];
let arrayItems = []

products.productsEcommerce.forEach(item => {
    if (item.score > 3) arrayVendidos.push(item)
})

arrayVendidos.forEach(item => {

    let cardDiv = document.createElement('div');
    cardDiv.className = 'cards-vendidos'

    let divFavorite = document.createElement('div');
    divFavorite.className = 'icon-heart';
    let nameProduct = document.createElement('h2')
    nameProduct.textContent = item.nameProduct
    let iconHeart = document.createElement('i');
    iconHeart.className = 'fa-sharp fa-solid fa-heart';

    iconHeart.addEventListener('click', handleFavorite(iconHeart))

    divFavorite.append(nameProduct, iconHeart)

    let divImg = document.createElement('div');
    divImg.className = 'div-img';

    let img = document.createElement('img');
    img.src = item.image
    divImg.addEventListener('click', () => {
        location.href = 'src/pages/detalleProduct.html'
        localStorage.setItem("data", JSON.stringify(item))

    })
    divImg.appendChild(img)

    let divPrice = document.createElement('div');
    divPrice.className = 'div-price-envio';

    let price = document.createElement('span');
    price.className = 'price'
    price.textContent = `US ${item.price}`

    divPrice.appendChild(price)

    let divEnvio = document.createElement('div');
    divEnvio.className = 'div-price-envio';

    if (`${item.shippingFree}`){
        let envio = document.createElement('span');
        envio.textContent = 'Envio gratis'
        divEnvio.appendChild(envio)
    }else {
        let promocion = document.createElement('span');
        promocion.textContent = `30 % OFF`
        divEnvio.appendChild(promocion)
    }

    cardDiv.append(divFavorite, divImg, divPrice, divEnvio);
    arrayItems.push(cardDiv)
})

cards.append(...arrayItems)

//Le agrego un evento al input de buscar producto
let search = document.querySelector('.input-search');
search.addEventListener('keyup', searchProduct(arrayItems, search));



