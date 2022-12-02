import Shopping from "../templates/Shopping";
import {deleteItem} from "../util/getData";
import {URL} from "../util/urls";

export const modalShopping = (shoop, items) => {

    return async function(){
        shoop.style.display = 'block';
        items.innerHTML = await Shopping()
        const deleteItems = document.querySelectorAll('.fa-x');
        deleteItems.forEach(item => {
            item.addEventListener('click', async () => {
                const item = document.querySelector('.item-cart')
                item.parentNode.removeChild(item)
                await deleteItem(URL.shoppingCart, item.id);
            })
        })
    }
}