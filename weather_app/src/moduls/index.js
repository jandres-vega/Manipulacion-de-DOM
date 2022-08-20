const URL = 'https://api.weatherapi.com/v1/current.json?key=9b407824343b4eb2887145332221108';


let cardWeather;

let btnDelete

let divContainers = document.querySelector('.div-container');

let inputSearch = document.querySelector('.div-form input');


async function infoApi (country) {
    try {
        const res = await  fetch(`${URL}&q=${country}`, {
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        if (res.status === 400) {
            return 'error'
        }else {
            const data = await res.json();
            return {
                nameCountry : data.location.country,
                nameRegion : data.location.region,
                nameCity : data.location.name,
                temperature: `${data.current.temp_c} °C`,
                icon : data.current.condition.icon,
                nameText : data.current.condition.text
            }
        }
    }catch (e) {
        console.error(e)
    }
}

export async function renderDom() {
    let country = inputSearch.value

    let info = await infoApi(country);
    if (info === "error"){
        inputSearch.value = '';
        return alert('No se encuentra la ciudad');
    }

    cardWeather = document.createElement('div');
    cardWeather.className = 'div-card';

    let nameCountry = document.createElement('h3');
    nameCountry.textContent = info.nameCountry;

    let nameCity = document.createElement('h4');
    nameCity.textContent = info.nameCity;

    let icon = document.createElement('img');
    icon.src = info.icon

    let temperature = document.createElement('span');
    temperature.textContent = info.temperature;

    let nameText = document.createElement('p');
    nameText.textContent = info.nameText;
    btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.className = 'btn-delete';

    cardWeather.append(nameCountry,btnDelete, nameCity, temperature,icon, nameText);


    divContainers.appendChild(cardWeather)
    deleteCard()
    inputSearch.value = '';

}


function deleteCard() {
    btnDelete.addEventListener('click', () => {
        let aux = document.querySelector('.div-card')
        divContainers.removeChild(aux)
    })
}










