import {getDataDb} from "../util/getData";
import Cards from "../templates/Cards";
import {URL} from "../util/urls";


export const filterCategory = (item, productsDiv ) => {
    return async function () {
        console.log(item)
        let filterC = await getDataDb(`${URL.categories}${item.id}/products`);
        productsDiv.innerHTML = await Cards(filterC)
    }
}