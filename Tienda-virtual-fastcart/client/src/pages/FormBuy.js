const FormBuy = () => {
    return `
        <div class="container col-6">
            <form class="row">
                <div class="mb-3 col-12">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" name="name" class="form-control inputFormBuy">
                </div>
                <div class="mb-3 col-12">
                    <label for="exampleInputPassword1" class="form-label">Direccion</label>
                    <input type="text" name="address" class="form-control inputFormBuy">
                </div>
                <div class="mb-3 col-12">
                    <label for="exampleInputPassword1" class="form-label">Telefono</label>
                    <input type="text" name="phone" class="form-control inputFormBuy">
                </div>
                <button type="submit" class="checkoutBtn btn">Checkout</button>
            </form>
        </div>
    `
}
export default FormBuy;

