import {getDataDb} from '../util/getData';
import Cards from "../templates/Cards";
import {URL} from "../util/urls";
const Favorites = async () => {
    const dataFavorites = await getDataDb(URL.favorites);
    return `
        ${
            await Cards(dataFavorites)
        }
    `
}
export default Favorites;