import {getDataDb} from "../util/getData";
import {URL} from '../util/urls'
const Shopping = async () => {
    let result = 0
    const shoppingCa = await getDataDb(URL.shoppingCart)
    shoppingCa.forEach(item => {
        let precio = item.price
         result +=(precio * item.amountCart)
    })
    const total = document.querySelector('.total-shop');
    total.textContent = `$${result}`
    return `
        ${
            shoppingCa.map(item => `
                <div class="item-cart" id="${item.id}">
                    <div class="item-img">
                        <img src="${item.image}" alt="img-product">
                    </div>
                    <div class="item-info">
                        <h6>${item.name}</h6>
                        <span>${item.amountCart} x ${item.price}</span>
                    </div>
                    <div class="del-x">
                        <i class="fa-solid fa-x" id="${item.id}"></i>
                    </div>
                </div>
            `).join('')
        }   
    `
}
export default Shopping