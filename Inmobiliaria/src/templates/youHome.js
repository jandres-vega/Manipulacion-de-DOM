import getData from "../utils/getData.js";

const API1 = 'http://localhost:3000/tipoInmueble';
const API2 = 'http://localhost:3000/ubicacion';


const youHome = async () => {
    const typeOfPropiedades = await getData(API1);

    const ubication = await getData(API2);

    return `
        <div class="container-filter">
            <div class="container-categories-1">
                <select>
                <option value="All" >Propiedades</option>
                ${
                    typeOfPropiedades.map(item => `
                        <option value="${item.id}">${item.name}</option>
                    `).join('')
                }
            </select>
            </div>
            <div class="container-categories-2">
                <select>
                    <option value="All">Ubicaciones</option>
                        ${
                        ubication.map(item => `
                            <option value="${item.id}">${item.ciudad}</option>
                        `).join('')
                        }
                </select>
            </div>
            <div class="container-submit-btn">
                <input type="text" placeholder="Search for properties" value=""/>
                <button type="button" >Find properties</button>
            </div>
        </div>
    `
}

export default youHome;