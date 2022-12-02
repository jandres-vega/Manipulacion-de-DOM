// import {getDataC as categories} from "../util/getData";
import {getDataDb} from '../util/getData';
import {URL} from '../util/urls'
let Categories = async () => {

    let dataCategories = await getDataDb(URL.categories);
    return `
        <div class="categories">
            <h2>Categories</h2>
            <ul>
            ${
        dataCategories.map(item => `
                    <li>
                        <img class="img-icon" src="${item.image}" alt="icon">
                        <span class="value" id="${item.id}">${item.category}</span>
                    </li>
                `).join('')
    }
            </ul>
        </div>
    `
}

export default Categories;