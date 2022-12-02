import {handleCategory, handleMinMax, searchProduct, handleFavorite} from "./main.js";

let arrayItems = [];
let category
let divCardColchones
let sectionCards = document.querySelector('.cards-colchones')
export const renderCard = (products) => {
    products.forEach(item => {
        category = document.createElement('span');
        category.textContent = item.category.subCategory;
        category.style.display = 'none'

        divCardColchones = document.createElement('div');
        divCardColchones.className = 'div-card-colchon';

        let nameProduct = document.createElement('h2')
        nameProduct.textContent = item.nameProduct
        let divIcon = document.createElement('div');
        divIcon.className = 'icon-heart'
        let iconFavorite = document.createElement('i');
        iconFavorite.className = 'fa-sharp fa-solid fa-heart';
        divIcon.append(nameProduct, iconFavorite);

        iconFavorite.addEventListener('click', handleFavorite(iconFavorite) )

        let divImgColchon = document.createElement('div');
        divImgColchon.className = 'div-img'
        let imgColchon = document.createElement('img');
        imgColchon.src = item.image;
        divImgColchon.addEventListener('click', function () {
            location.href = '../pages/detalleProduct.html'
            localStorage.setItem("data", JSON.stringify(item))
        })
        divImgColchon.appendChild(imgColchon);

        let divPriceColchon = document.createElement('div');
        divPriceColchon.className = 'div-price-envio';
        let price = document.createElement('span');
        price.textContent = `US ${item.price}`;
        divPriceColchon.appendChild(price);

        let divEnvio = document.createElement('div');
        divEnvio.className = 'div-price-envio'

        if (item.shippingFree){
            let envio = document.createElement('span');
            envio.textContent = 'Envio Gratis'
            divEnvio.appendChild(envio);
        }else {
            let envio = document.createElement('span');
            envio.textContent = '30 % OFF';
            divEnvio.appendChild(envio);
        }

        divCardColchones.append(divIcon, divImgColchon, divPriceColchon, divEnvio, category);
        arrayItems.push(divCardColchones);
    })
    sectionCards.append(...arrayItems);

}
//agrego un evento al menu de opciones para filtrar por categoria
let optionsCategory = document.querySelector('.select-options-category');
optionsCategory.addEventListener('click', handleCategory(arrayItems, optionsCategory));


//Le agrego un evento al input de buscar producto
let search = document.querySelector('.input-search');
search.addEventListener('keyup', searchProduct(arrayItems, search))

//agrego un evento para ordenar los productos por precio
let optionMinMax = document.querySelector('.select-options-price');
optionMinMax.addEventListener('click', handleMinMax(arrayItems, optionMinMax, sectionCards))

