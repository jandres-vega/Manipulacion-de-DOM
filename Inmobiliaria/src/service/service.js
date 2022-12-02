import getData from "../utils/getData.js";
import cards from "../templates/cards.js";
import agencies from '../templates/agencies.js';
import detaillPropertie from "../templates/detaillPropertie.js";

const main = () => {

    const containerCard = document.querySelector('.container-cards');
    const agenciesC = document.querySelector('.container-agencies');
    const detail = document.querySelector('.detailPropertie');
    let cardsDetail;
    let valueInput;

    let clearNodos = () => {
        containerCard.innerHTML = ''
        detail.innerHTML = ''
        agenciesC.innerHTML = '';
    }

    const handleSearch = async (search,API) => {
        let searchName = await getData(`${API}${valueInput}`);
        containerCard.innerHTML = cards(searchName);
        search.value = ''
    }

    const handleValue = () => {
        return function (e) {
            console.log(e.target.value);
            valueInput = e.target.value;
        }
    }

    const handleTypeLocation = (dataInfo) => {
        return function (e) {
            let filterAdreess = dataInfo.filter(item => {
                if (item.ubicacionId === Number(e.target.value)){
                    clearNodos()
                    return item
                }else if(e.target.value === 'All') {
                    return dataInfo
                }
            })
            containerCard.innerHTML = cards(filterAdreess)
            cardsDetail = document.querySelectorAll('.card');
            renderFilter(cardsDetail, dataInfo)
        }
    }

    const handleTypeInmueble = (dataInfo) => {
        return function (e) {
            let filterInmobiliaria = dataInfo.filter(item => {
                if (item.tipoInmuebleId === Number(e.target.value)) {
                    clearNodos()
                    return item
                }
                else if (e.target.value === 'All') {
                    return dataInfo
                }
            });
            containerCard.innerHTML = cards(filterInmobiliaria);
            cardsDetail = document.querySelectorAll('.card');
            renderFilter(cardsDetail, dataInfo)

        }
    }

    const handleOptions = (options, dataInfo) => {
        options.forEach(option => {
            option.addEventListener('click', () => {
                if (option.textContent === 'HOMEPAGE'){
                    clearNodos()
                }else if(option.textContent === 'PROPERTIES'){
                    clearNodos()
                    containerCard.innerHTML = cards(dataInfo);
                    cardsDetail = document.querySelectorAll('.card');
                    renderFilter(cardsDetail, dataInfo)
                }else if (option.textContent === 'AGENCIES'){
                    clearNodos()
                    agenciesC.innerHTML = agencies();
                }
            })
        })
    }

    const renderFilter = (cards, dataInfo) => {
        cards.forEach(item => {
            item.addEventListener('click',() => {
                let cardDetail = dataInfo.filter(info => info.id === Number(item.childNodes[1].textContent));
                detail.innerHTML = detaillPropertie(cardDetail);
                containerCard.innerHTML =''
            })
        })
    }

    return {
        handleSearch,
        handleValue,
        handleTypeLocation,
        handleTypeInmueble,
        handleOptions
    }
}

export default main;