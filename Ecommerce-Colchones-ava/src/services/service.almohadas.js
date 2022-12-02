import {products} from "../info/info.js";
import {renderCard} from "./render.js";
import {handleCarrusel} from "./carrusel.js";



let array = []
for (let i = 0; i < products.productsEcommerce.length ; i++) {
    if (products.productsEcommerce[i].score > 3){
        array.push(products.productsEcommerce[i])
    }
}
let arrayAlmohadas = [];
for (let i = 0; i < products.productsEcommerce.length; i++){
    if (products.productsEcommerce[i].category.category3 === 'Almohadas'){
        arrayAlmohadas.push(products.productsEcommerce[i])
    }
}

renderCard(arrayAlmohadas)
handleCarrusel(array)
