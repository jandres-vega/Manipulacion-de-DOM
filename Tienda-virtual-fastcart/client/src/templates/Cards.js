const modalFavorites = (id) => {
    return `
        <div class="modal-fav" id="${id}">
            <i class="fa-solid fa-heart itemHeart${id}" id="${id}"></i>
           
            <i class="fa-solid fa-trash-can" id="${id}"></i>
        </div>
    `
}
const Cards = async (products) => {
    return ` 
        <div class="container">
            <div class="row">
                ${
        products.map(item => `
                    <div class="col-md-6 col-lg-4 card-p" id="${item.id}" >
                        ${modalFavorites(item.id)}
                        <div class="container-img-product">
                            <img class="img" src="${item.image}" alt="img-product">
                        </div>
                            <div>
                                <h4>${item.name}</h4>
                                <span>Precio: $${item.price}</span>
                                <p>Cantidad: ${item.amount}</p>
                            </div>
                            <div class="btn-add">
                                <button class="btn-minus-1" id="${item.id}">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input class="input-card-dis" id="${item.id}" type="text" value="0" disabled>
                                <button class="btn-plus-1" id="${item.id}">
                                    <i class="fa-solid fa-plus" ></i>
                                </button>
                                <button class="addShoppinCart" id="itm${item.id}">Add</button>
                            </div>
                    </div>
                `).join('')
    }      
            </div>
        </div>
    `
}
export default Cards;

// const Cards = async (products) => {
//     return `
//         <div class="cards-products">
//             ${
//         products.map(item => `
//                     <div class="card-p" id="${item.id}" >
//                         ${modalFavorites(item.id)}
//                         <img class="img" src="${item.image}" alt="img-product">
//                             <div>
//                                 <h4>${item.name}</h4>
//                                 <span>Precio: $${item.price}</span>
//                                 <p>Cantidad: ${item.amount}</p>
//                             </div>
//                             <div class="btn-add">
//                                 <button class="btn-minus-1" id="${item.id}">
//                                     <i class="fa-solid fa-minus"></i>
//                                 </button>
//                                 <input class="input-card-dis" id="${item.id}" type="text" value="0" disabled>
//                                 <button class="btn-plus-1" id="${item.id}">
//                                     <i class="fa-solid fa-plus" ></i>
//                                 </button>
//                                 <button class="addShoppinCart" id="itm${item.id}">Add</button>
//                             </div>
//                     </div>
//                 `).join('')
//     }
//         </div>
//     `
// }
// export default Cards;
