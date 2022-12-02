import {getDataDb} from "../util/getData";
import {URL} from '../util/urls'
const ShoppingCart = async() => {
    const cartShopping = await getDataDb(URL.shoppingCart);

    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Aumentar o Disminuir</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                ${
                    cartShopping.map(item => `
                        <tr id="row${item.id}">
                            <th scope="row">${item.id}</th>
                            <td>
                                <div class="shoppin-cart-img">
                                    <img src="${item.image}" alt="img-pro">
                                </div>
                            </td>
                            <td>${item.name}</td>
                            <td>
                                <span>${item.amountCart}</span>
                            </td>
                            <td>
                                <div class="min-max-shopping">
                                    <i class="fa-solid fa-minus"></i>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash" id="${item.id}"></i>
                            </td>
                        </tr>
                    `).join('')
                }
            </tbody>
        </table>
    `
}
export default ShoppingCart;


