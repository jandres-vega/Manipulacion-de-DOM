import {deleteItem} from "../util/getData";
import {URL} from "../util/urls";

export const deleteProductList =async (deleteDb) => {
    deleteDb.forEach(item => {
        item.addEventListener('click', async() => {
            const table = document.querySelector(`#row${item.id}`);
            table.parentNode.removeChild(table);
            await deleteItem(URL.products, item.id)
        })
    })
}