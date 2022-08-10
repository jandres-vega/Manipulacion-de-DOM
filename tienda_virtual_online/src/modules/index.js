let search = document.querySelector('.div-search');

export const searchProduct = (array) => {
    return function () {
         array.forEach(item => {
             let input = search.value;
            if (item.children[0].firstChild.data.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                item.style.display = ''
            }else {
                item.style.display = 'none'
            }
         })
    }
}

export const handleSelect = ( array) => {
    return function (e) {
        array.forEach(index => {
            if (e.target.value === 'pants'){
                console.log()
                if (index.childNodes[3].textContent === e.target.value) index.style.display = ''
                else index.style.display = 'none'
            }else if(e.target.value === 'shirts') {
                if (index.childNodes[3].textContent=== e.target.value) index.style.display = ''
                else index.style.display = 'none'
            }else if(e.target.value === 'shoes'){
                if (index.childNodes[3].textContent === e.target.value) index.style.display = ''
                else index.style.display = 'none'
            }else if (e.target.value === 'cat'){}
            else {
                index.style.display = ''
            }
        })
    }
}

export let handleSelectPrice = (array, card) => {

    return function (e) {
        let orden = e.target.value;
        if (orden === 'price') return null;
        else if (orden === 'menorMayor') {
            array.sort(function (a,b){
                let numberA = Number(a.childNodes[2].textContent.slice(1))
                let numberB = Number(b.childNodes[2].textContent.slice(1))
                return numberA - numberB

            })
            // for (let i = 0; i < arrayItems.length; i++) {
            //     card.appendChild(arrayItems[i]);
            // }
            array.forEach(item => {
                card.appendChild(item)
            })
        }else {
            array.sort(function (a,b){
                let numberA = Number(a.childNodes[2].textContent.slice(1))
                let numberB = Number(b.childNodes[2].textContent.slice(1))
                return numberB - numberA

            })
            // for (let i = 0; i < arrayItems.length; i++) {
            //     card.appendChild(arrayItems[i]);
            // }
            array.forEach(item => {
                card.appendChild(item)
            })
        }
    }
}

