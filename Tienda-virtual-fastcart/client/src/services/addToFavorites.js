import {addDataDb, getDataDb} from "../util/getData";
import {URL} from "../util/urls";

export const addToFavorites = (item) => {

    return async function () {
        item.style.color = "red"
        let fav = await getDataDb(URL.products, item.id);
        await addDataDb(URL.favorites, fav);
        let favorit = await getDataDb(URL.favorites);
        const heart = document.getElementById('heart-cont');
        heart.textContent = favorit.length
    }
}