import logo from '../assets/logo.png'

const Header = () => {
    return `
        <div class="container-fluid text-white p-2 ps-5 d-flex ">
            <span class="dt-info" >Something you love is now on sale! Buy now</span>
            <div class="px-5">
                <span>English v</span>
                |
                <span>USD v</span>
            </div>
        </div>
        <div class="nav1-div">
            <nav class="navBar">
            <div class="logo-store">
                <a href="/">
                    <img src="${logo}" alt="logo">
                </a> 
            </div>
            <div class="search">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <div class="icon-search"><i class="fa-solid fa-magnifying-glass"></i></div>
                </form>
            </div>
            <div class="container-icons">
                <i class="fa-solid fa-phone-volume"></i>
                <div class="cont-0">
                    <span id="heart-cont"></span>
                    <a href="#/favorites">
                        <i class="fa-sharp fa-solid fa-heart"></i> 
                    </a>
                   
                </div>
                <div class="cont-0">
                    <span class="shopping-cart"></span>
                    <a >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
                <div class="modal-Shopping">
                    <div class="item-info-checkout">
                        
                    </div>
                    <div class="total-checkout">
                        <div class="total">
                            <span>Total</span>
                            <span class="total-shop">0</span>
                        </div>
                        <div class="checkout">
                            <a href="#/shopping">
                                <button class="btn-cart-6">View Cart</button>
                            </a>
                            <a href="#/formbuy">
                                <button class="btn-check-5">Checkout</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="cont-0">
                    <span id="heart-cont"></span>
                    <a href="#/dashboard">
                        <i class="fa-solid fa-user"></i>
                    </a>   
                </div>
            </div>
        </nav>
        </div>
        <div class="nav2-div">
            <nav class="navBar2 navbar navbar-expand-lg">
            <div class="extra container-fluid">
                <div class="btn-categories">
                    <button class="btn-categories">All categorias</button>
                </div>  
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-15 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            Shop
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mega Menu
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link " href="#" role="button">
                            Pages
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    `
}
export default Header;