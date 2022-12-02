import {products} from "../info/info.js";
import {renderCard} from "./render.js";
import {handleCarrusel} from "./carrusel.js";

let array = []
for (let i = 0; i < products.productsEcommerce.length ; i++) {
    if (products.productsEcommerce[i].score > 3){
        array.push(products.productsEcommerce[i])
    }
}
let arrayMuebles = [];
for (let i = 0; i < products.productsEcommerce.length; i++){
    if (products.productsEcommerce[i].category.category4 === 'Muebles'){
        arrayMuebles.push(products.productsEcommerce[i])
    }
}

renderCard(arrayMuebles)
handleCarrusel(array)