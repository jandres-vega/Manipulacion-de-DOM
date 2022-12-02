import {addDataDb, getDataDb} from "../util/getData";
import {URL} from "../util/urls";

export const maxCarShopping = (max, shopping, btnAdd, min) => {
    let fav
    max.forEach(item => {
        shopping.forEach(async input => {
            if (input.id === item.id){
                let cont = 1
                item.addEventListener('click', async() => {
                    input.value = cont++
                    fav = await getDataDb(URL.products,item.id);
                    fav.amountCart = cont -1
                })
            }
        })
    })
    min.forEach(i => {
        shopping.forEach(async input => {
            if (input.id === i.id){
                i.addEventListener('click', async() => {
                    input.value -= 1
                    fav = await getDataDb(URL.products,i.id);
                    fav.amountCart = input.value
                    console.log(fav)

                })
            }
        })
    })
    btnAdd.forEach(btn => {
        shopping.forEach(async input => {
            if (input.id === btn.id[3]){
                btn.addEventListener('click', async () => {
                    await addDataDb(URL.shoppingCart, fav)
                })
            }
        })
    })
}