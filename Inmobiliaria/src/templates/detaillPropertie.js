
const detaillPropertie = (data) => {
    const ubication = (ubi) => {
        if (ubi === 1) return `<span>San Diego</span>`
        else if (ubi === 2) return `<span>San Francisco</span>`
        else if (ubi === 3) return `<span>Los Angeles</span>`
        else return `<span>Los Settles</span>`
    }
    const agentes = (agent) => {
        if (agent === 1) return `<button>Juan Vargas</button>`
        else if (agent === 2) return `<button>Carlos Gomez</button>`
        else return `<button>Anguie contreras</button>`
    }

    return `
        ${
            data.map(item => `
                <div class="container-detail-add">
                    <div class="hot-deal">
                        <span>CASAROYAL REAL ESTATE AGENCY</span>
                        <h2>Hot Deal</h2>
                    </div>
                    <div class="container-detail">
                        <div class="detail-img">
                            <img src="${item.image}" alt="img-propertie">
                        </div>
                        <div class="detail">
                            <h1>${item.nameInmueble}</h1>
                            <p>${item.description}</p>
                            <div class="content-ubi">${ubication(item.ubicacionId)}</div>
                            <button class="btn-price" type="button">From ${item.price} Per Month</button>  
                            <div class="agent-ubi">
                                
                                ${agentes(item.propietario)}
                             </div>
                            <div class="container-icons-detail">
                                <div class="icon-spec">
                                    <img class="metros" src="../../src/assets/img.png" alt="icon-metros">
                                    <span class="espec">${item.areaInmueble} <br> Sq Ft</span>
                                </div>
                                <div class="icon-spec">
                                    <img src="../../src/assets/bedRooms.svg" alt="icon-beds">
                                    <span class="espec">${item.bedrooms} <br> Beds</span>
                                </div>
                                <div class="icon-spec">
                                    <img src="../../src/assets/bathing.svg" alt="icon-bats">
                                    <span class="espec">${item.bathing} <br> Bats</span>
                                </div>
                                <div class="icon-spec">
                                    <img src="../../src/assets/parking.svg" alt="icon-garage">
                                    <span class="espec">${item.parking ? 1:0} <br> Garage</span>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')
        }
    `
}
export default detaillPropertie;