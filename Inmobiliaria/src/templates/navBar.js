let menuOptions = ['HOMEPAGE', 'PROPERTIES', 'AGENCIES', 'PAGES', 'ABOUT', 'CONTACT'];

const navBar = () => {
    return `
        <div class="navBar">
            <div class="container-logo">
                <img src="../src/assets/logo.png" alt="logo-inmobiliaria">
            </div>
            <div class="container-bar">
                <img class="icon-bar" src="../../src/assets/bar-menu.svg" alt="logoicon-bar" />
            </div>
            <div class="menu-options">
                <ul>
                    ${
                        menuOptions.map(item => `
                            <div class="option">
                                <li class="men-opt">${item}</li>
                            </div>
                        `).join('')
                    }
                </ul>
            </div>
            <div class="header-submit">
                <span>COMPARE</span>
                <button>SUBMIT LISTING</button>
            </div>
        </div>
    `
}

export default navBar;