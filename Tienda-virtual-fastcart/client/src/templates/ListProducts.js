import {getDataDb} from "../util/getData";
import {URL} from "../util/urls";
const ListProducts = async() => {
    const cartShopping = await getDataDb(URL.products);

    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Actualizar</th>
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
                                <span>${item.amount}</span>
                            </td>
                            <td>
                                <span>${item.price}</span>
                            </td>
                            <td>
                                <button class="btn btn-primary update-btn" id="${item.id}">Editar</button>
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
export default ListProducts;
