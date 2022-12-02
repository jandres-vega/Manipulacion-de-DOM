import {render} from './service/render.js'
import contactRoyal from "./templates/contactRoyal.js";
import navBar from "./templates/navBar.js";
const header = document.querySelector('.header');

header.innerHTML = contactRoyal();
header.innerHTML += navBar();

window.addEventListener('load', render)



