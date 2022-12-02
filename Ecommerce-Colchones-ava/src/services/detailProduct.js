let data = JSON.parse(localStorage.getItem('data'))

let containerDetail = document.querySelector('.container-detail')

let divImg = document.createElement('div');
divImg.className = 'div-img-detail';
let imgDetail = document.createElement('img');
imgDetail.src = data.image;
divImg.appendChild(imgDetail);

let name = document.createElement('h1')
name.textContent = data.nameProduct

let description = document.createElement('p');
description.className = 'description'
description.textContent = data.description

let price = document.createElement('span')
price.className = "price"
price.textContent = `Precio: US ${data.price}`

let divCount = document.createElement('div');
divCount.className = 'div-Count'
let cantidad = document.createElement('span');
cantidad.textContent = 'Cantidad';
let mount = document.createElement('span');
mount.textContent = data.mounts
divCount.append(cantidad, mount)

let divAdd = document.createElement('div');
divAdd.className = 'div-btn-add';
let btnAdd = document.createElement('button');
btnAdd.textContent = 'Agregar'
divAdd.appendChild(btnAdd)

let count = document.querySelector('.cant-shopping')
let cont = 0
const resMount = Number(mount.textContent) -1
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    let aux = Number(count.textContent);

    if (aux <= resMount){
        count.innerHTML = `${cont +=1}`;
        mount.textContent = `${Number(mount.textContent -= '1')}`
    }else {
        alert("No hay mas productos")
    }
})
containerDetail.append(divImg, name, description, price, divCount, divAdd);
