let intervalo = null;
let carruselItems = document.querySelector('.banner');
let step = 1

export const handleCarrusel = (products) => {
    products.forEach(item => {
        let divImgCarrusel = document.createElement('div');
        divImgCarrusel.className = 'div-img-carrusel';
        if (item.score > 3) {
            let imgCarrusel = document.createElement('img');
            imgCarrusel.src = item.image;
            divImgCarrusel.appendChild(imgCarrusel);
        }
        carruselItems.appendChild(divImgCarrusel)
    })

    let scrollMax = carruselItems.scrollHeight - carruselItems.clientHeight
    const start = () => {

        intervalo = setInterval(() =>{
            carruselItems.scrollTop = carruselItems.scrollTop + step;
            if (carruselItems.scrollTop === scrollMax)step = step * -1
            else if(carruselItems.scrollTop === 0)step = step * -1;
        }, 10);
    }
    const stop = (intervalo) => {
        clearInterval(intervalo)
    }
    carruselItems.addEventListener('mouseover', () => {

        stop(intervalo)
    });

    carruselItems.addEventListener('mouseout', () => {
        start()
    })
    start()
}

