import {getDataDb, updateProduct} from "../util/getData";
import {URL} from "../util/urls";
import FormProduct from "../templates/FormProduct";
import {getDataForm} from "./getDataForm";

export const updateProductDash = async (btnUpdate, form, dataForm, btn) => {
    btnUpdate.forEach(item => {
        item.addEventListener('click', async() =>{
            let data = await getDataDb(URL.products, item.id);
            const mainDash = document.querySelector('.dashboard-main');
            mainDash.innerHTML =await FormProduct()
            form = document.querySelectorAll('.getData');
            btn = document.querySelector('.addBtn-js')
            form[0].value = data.name
            form[1].value = data.image
            form[2].value = data.price
            form[3].value = data.amount
            dataForm.name = data.name
            dataForm.image = data.image
            dataForm.price = data.price
            dataForm.amount = data.amount
            getDataForm(form, dataForm)
            btn.addEventListener('click', async(e) => {
                e.preventDefault()
                await updateProduct(`${URL.products}${item.id}`, dataForm)
            })
        })
    })
}