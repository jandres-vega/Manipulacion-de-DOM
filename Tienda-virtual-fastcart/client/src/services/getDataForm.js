export const getDataForm = (form, dataForm) => {

    form.forEach(item => {
        item.addEventListener('keyup', (e) => {
            switch (e.target.name) {
                case 'name':
                    dataForm.name = e.target.value;
                    break;
                case 'image':
                    dataForm.image = e.target.value;
                    break;
                case 'price':
                    dataForm.price = e.target.value;
                    break;
                case 'amount':
                    dataForm.amount = e.target.value;
                    break;
            }
        })
    })
}