import Home from "../pages/Home";
import {URL} from "../util/urls";
import {addDataDb, deleteItem, getDataDb} from "../util/getData";
import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveRoutes";
import Favorites from "../pages/Favorites";
import ShoppingCart from "../pages/ShoppinCart";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/DashBoard";
import FormBuy from "../pages/FormBuy";
import FormProduct from "../templates/FormProduct";
import ListProducts from "../templates/ListProducts";
import {maxCarShopping} from "../services/maxCartShopping";
import {getDataForm} from "../services/getDataForm";
import {updateProductDash} from "../services/updateProduct";
import {deleteProductList} from "../services/deleteListProduct";

const routes = {
    '/': Home,
    '/favorites': Favorites,
    '/shopping': ShoppingCart,
    '/dashboard': DashBoard,
    '/formbuy': FormBuy,
}

const router = async () => {
    const landing = document.querySelector('.landing');
    const main = document.querySelector('.main-p')


    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = routes[route] ? routes[route]: NotFound;

    if (route === '/dashboard'){
        main.innerHTML = await render()
        const toggle = document.querySelector(".toggle")
        const menuDashboard = document.querySelector(".menu-dashboard");
        const enlacesMenu = document.querySelectorAll(".enlace");
        let form
        let btn;
        toggle.addEventListener("click", () => menuDashboard.classList.toggle("open"));
        let dataForm = {
            name: '',
            image: '',
            price: '',
            amount: ''
        }
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener("click", async() => {
                menuDashboard.classList.toggle("open");
                if (enlace.id === '1') {
                    const mainDash = document.querySelector('.dashboard-main');
                    mainDash.innerHTML =await  ListProducts();
                    const deleteDb = document.querySelectorAll('.fa-trash');
                    await deleteProductList(deleteDb);
                    const btnUpdate = document.querySelectorAll('.update-btn');
                    await updateProductDash(btnUpdate, form, dataForm, btn);
                }

                else if (enlace.id === '2'){
                    const mainDash = document.querySelector('.dashboard-main');
                    mainDash.innerHTML =await FormProduct()
                    form = document.querySelectorAll('.getData');
                    btn = document.querySelector('.addBtn-js')
                    const selectCategory = document.querySelector('.category-form');
                    getDataForm(form, dataForm)
                    selectCategory.addEventListener('change', (e) => {
                        dataForm.categoryId = e.target.value;

                    })
                    btn.addEventListener('click', async(e) => {
                        e.preventDefault()
                        await addDataDb(URL.products, dataForm)
                    })



                }

            })
        })



    }
    else if(route === '/favorites'){
        landing.innerHTML = await render();
        let trash = document.querySelectorAll('.fa-trash-can');
        trash.forEach(item => {
            item.addEventListener('click', () => {
                let cards = document.querySelectorAll('.card-p');
                cards.forEach(async card =>{
                    if (card.id === item.id){
                        card.parentNode.removeChild(card);
                        await deleteItem(URL.favorites, item.id);
                    }
                })
            })
        })
        const shopping = document.querySelectorAll('.input-card-dis');
        const max = document.querySelectorAll(`.btn-add .btn-plus-1`);
        const min = document.querySelectorAll('.btn-add .btn-minus-1');
        const btnAdd = document.querySelectorAll('.addShoppinCart');

        await maxCarShopping(max, shopping, btnAdd, min)
    }
    else if(route === '/formbuy') {
        landing.innerHTML = await render();
        let formUser = {
            name: '',
            address: '',
            phone: ''
        }
        const inputFormBuy = document.querySelectorAll('.inputFormBuy');
        inputFormBuy.forEach(item => {
            item.addEventListener('keyup', (e) => {
                switch (e.target.name) {
                    case 'name':
                        formUser.name = e.target.value;
                        break;
                    case 'address':
                        formUser.address = e.target.value;
                        break;
                    case 'phone':
                        formUser.phone = e.target.value;
                        break;
                }
            })
        })
        const btnCheckout = document.querySelector('.checkoutBtn');

        btnCheckout.addEventListener('click', async (e) => {
            e.preventDefault()
            formUser.shopping = await getDataDb(URL.shoppingCart)
            await addDataDb(URL.ordenCompra, formUser);
        })

    }
    else {
        landing.innerHTML = await render();
        const iconDelete = document.querySelectorAll('.fa-trash');
        iconDelete.forEach(item => {
            item.addEventListener('click', async() =>{
                const table = document.querySelector(`#row${item.id}`);
                table.parentNode.removeChild(table);
                await deleteItem(URL.shoppingCart, item.id)

            })
        })

    }

}

export default router;