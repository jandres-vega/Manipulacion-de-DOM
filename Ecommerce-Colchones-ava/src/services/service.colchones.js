import {products} from "../info/info.js";
// import {searchProduct,
//         handleCategory,
//         handleMinMax,
//        } from "./main.js";
import {handleCarrusel} from "./carrusel.js";
import {renderCard} from "./render.js";

// let opc = 'Colchones'
// let category
// let divCardColchones
// let sectionCards = document.querySelector('.cards-colchones')
let array = []
for (let i = 0; i < products.productsEcommerce.length ; i++) {
    if (products.productsEcommerce[i].score > 3){
        array.push(products.productsEcommerce[i])
    }
}
let arrayColchones = [];
for (let i = 0; i < products.productsEcommerce.length; i++){
    if (products.productsEcommerce[i].category.category1 === 'Colchones'){
        arrayColchones.push(products.productsEcommerce[i])
    }
}

renderCard(arrayColchones)
handleCarrusel(array)
// products.productsEcommerce.forEach(item => {
//     if (item.category.category1 === 'Colchones') {
//
//         category = document.createElement('span');
//         category.textContent = item.category.subCategory;
//         category.style.display = 'none'
//
//         divCardColchones = document.createElement('div');
//         divCardColchones.className = 'div-card-colchon';
//
//         let nameProduct = document.createElement('h2')
//         nameProduct.textContent = item.nameProduct
//         let divIcon = document.createElement('div');
//         divIcon.className = 'icon-heart'
//         let iconFavorite = document.createElement('i');
//         iconFavorite.className = 'fa-sharp fa-solid fa-heart';
//         divIcon.append(nameProduct, iconFavorite);
//
//         let divImgColchon = document.createElement('div');
//         divImgColchon.className = 'div-img'
//         let imgColchon = document.createElement('img');
//         imgColchon.src = item.image;
//         divImgColchon.appendChild(imgColchon);
//
//         let divPriceColchon = document.createElement('div');
//         divPriceColchon.className = 'div-price-envio';
//         let price = document.createElement('span');
//         price.textContent = `US ${item.price}`;
//         divPriceColchon.appendChild(price);
//
//         let divEnvio = document.createElement('div');
//         divEnvio.className = 'div-price-envio'
//
//         if (item.shippingFree){
//             let envio = document.createElement('span');
//             envio.textContent = 'Envio Gratis'
//             divEnvio.appendChild(envio);
//         }else {
//             let envio = document.createElement('span');
//             envio.textContent = '30 % OFF';
//             divEnvio.appendChild(envio);
//         }
//
//         divCardColchones.append(divIcon, divImgColchon, divPriceColchon, divEnvio, category);
//         arrayItems.push(divCardColchones);
//     }
// });
//
// sectionCards.append(...arrayItems);

// //agrego un evento al menu de opciones para filtrar por categoria
// let optionsCategory = document.querySelector('.select-options-category');
// optionsCategory.addEventListener('click', handleCategory(arrayItems, optionsCategory));
//
//
// //Le agrego un evento al input de buscar producto
// let search = document.querySelector('.input-search');
// search.addEventListener('keyup', searchProduct(arrayItems, search))
//
// //agrego un evento para ordenar los productos por precio
// let optionMinMax = document.querySelector('.select-options-price');
// optionMinMax.addEventListener('click', handleMinMax(arrayItems, optionMinMax, sectionCards))
//
// //funcion carrusel con tervalo
// handleCarrusel(array)







