import {getDataDb} from '../util/getData';
import {URL} from '../util/urls'
const FormProduct = async () => {
    let dataCategories = await getDataDb(URL.categories);
    return `
        <div class="container col-6">
            <form class="row">
                <div class="mb-3 col-12">
                    <label for="exampleInputEmail1" class="form-label">Nombre del Producto</label>
                    <input type="text" name="name" class="form-control getData" value="">
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Imagen</label>
                    <input type="text" name="image" class="form-control getData" value="">
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Precio</label>
                    <input type="text" name="price" class="form-control getData" value="">
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Cantidad</label>
                    <input type="text" name="amount" class="form-control getData" value="">
                </div>
                <div class="mb-3 col-6">
                    <label  class="form-label">Categoria</label>
                    <select class="category-form form-select" aria-label="Default select example">
                        <option selected>All</option>
                        ${
                            dataCategories.map(item => `
                                <option value="${item.id}">${item.category}</option>
                            `).join('')
                        }
                    </select>
                </div>
                <button type="submit" class="addBtn-js btn">Agregar Producto</button>
            </form>
        </div>
    `
}
export default FormProduct;