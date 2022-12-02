const cards = (cards) => {
    return`
        <div class="feactures">
            <span>ARROYAL REAL ESTATE AGENCY</span>
            <h2>Featured Properties</h2>
        </div>
        <div class="cards" >
            ${
                cards.map(item => `
            <div class="card">
                  <h1 class="id">${item.id}</h1>  
                  <div class="container-img">
                       <img src="${item.image}" alt="img-card">
                       <p class="house-sale">${item.nameInmueble}</p>
                       <p class="sale">FOR SALE</p>
                       <span>$${item.price}</span>
                  </div>
                  <div class="containerU">
                        <p>${item.address}</p>
                  </div>
                  <div class="container-add">
                        <span>${item.areaInmueble} Sq Ft</span>
                        <div class="container-icon">
                            <span>
                                <img src="../../src/assets/parking.svg" alt="icon-parkin" />
                                ${item.parking ? 1: 0}
                            </span>
                            <span>
                                <img src="../../src/assets/bedRooms.svg" alt="icon-badRoom"/>
                                ${item.bedrooms}
                            </span>
                            <span>
                                <img src="../../src/assets/bathing.svg" alt="icon-bathing"/>
                                ${item.bathing}
                            </span>
                        </div>
                  </div>
                  
            </div>
                `).join('')
    }
        </div>
        `
}
export default cards;