import user from '../assets/user.png';
const DashBoard = () => {
    return `
        <div class="d-flex contain-dash-1">
            <div class="menu-dashboard contain-dash-1 ">
                <div class="top-menu">
                    <div class="toggle">
                        <i class="fa-solid fa-bars mr-2 lead bx bx-menu"></i>
                    </div>
                </div>
                <div class="menu">
                    <div class="enlace" id="1">
                        <i class="fa-solid fa-person mr-2 lead"></i>
                        <span>Productos Actuales</span>
                    </div>
                    <div class="enlace" id="2">
                        <i class="fa-solid fa-trash mr-2 lead"></i>
                        <span>Crear productos</span>
                    </div>
                    <div class="enlace" id="3">
                        <i class="fa-solid fa-user mr-2 lead"></i>
                        <span>Analíticas</span>
                    </div>
                    <div class="enlace">
                        <i class="fa-solid fa-gear mr-2 lead"></i>
                        <span>Mensajes</span>
                    </div>
                </div>
            </div>
            <div class="w-100">
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container">
                        <form class="form-inline my-2 position-relative " id="search-form">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-search position-absolute " type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                    <img class="img-fluid rounded-circle mr-2 avatar" src="${user}" alt="img-user">
                                    Andres Vega
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="content">
                    <section class="py-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9">
                                    <h1 class="font-weight-bold mb-0">Bienvendido Andres Vega</h1>
                                    <p class="lead text-muted">Revisa la ultima informacion</p>
                                </div>
                                <div class="col-lg-3 ">
                                    <a href="/">
                                        <button class="w-100 btn btn-primary along-self-center">Volver al Home</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="dashboard-main bg-mix">
                     
                    </section>
                </div>
            </div>
        </div>
    `
}
export default DashBoard;