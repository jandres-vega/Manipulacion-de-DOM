import getData from "../utils/getData.js";
import youHome from "../templates/youHome.js";
import main from '../service/service.js';
const containerYouHome = document.querySelector('.you-home');

const API = 'http://localhost:3000/Inmobiliaria?q=';

let {
    handleOptions,
    handleTypeInmueble,
    handleTypeLocation,
    handleValue,
    handleSearch
} = main();

export const render = async () => {

    let dataInfo = await getData(API);

    containerYouHome.innerHTML += await youHome();
    const search = document.querySelector('.container-submit-btn input');
    const btn = document.querySelector('.container-submit-btn button');
    const options = document.querySelectorAll('.men-opt');

    handleOptions(options, dataInfo);

    const select1 = document.querySelector('.container-categories-1 select');
    const select2 = document.querySelector('.container-categories-2 select');

    select1.addEventListener('change', handleTypeInmueble(dataInfo));

    select2.addEventListener('change', handleTypeLocation(dataInfo));

    search.addEventListener('keyup', handleValue());

    btn.addEventListener('click', () => handleSearch(search, API));
}



