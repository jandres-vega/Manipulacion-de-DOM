const searchProduct = (arrayItems, search) => {
    return function () {
        let valor = search.value
        arrayItems.forEach(item => {
            if(item.childNodes[0].textContent.toLowerCase().indexOf(valor.toLowerCase()) > -1) item.style.display = ''
            else item.style.display = 'none'
        })
    }
}

const handleCategory = (arrayItems, optionsCategory) => {
    return function () {
        optionsCategory.addEventListener('click', (e) => {
            arrayItems.forEach(item => {
                if (e.target.value === 'All')item.style.display = 'block'
                else if (item.childNodes[4].textContent === e.target.value) item.style.display = '';
                else item.style.display = 'none';
            })
        });
    }
}

const handleMinMax = (arrayItems, optionMinMax, sectionCards) => {
    return function () {
        optionMinMax.addEventListener('click', (e) => {
            if (e.target.value === 'min-max'){
                let arrayAsc = arrayItems.sort((a, b) => {
                    let num1 = Number(a.childNodes[2].textContent.slice(2));
                    let num2 = Number(b.childNodes[2].textContent.slice(2));
                    return num1 - num2;
                })
                sectionCards.append(...arrayAsc);
            }
            else if (e.target.value === 'max-min'){
                let arrayDesc = arrayItems.sort((a, b) => {
                    let num1 = Number(a.childNodes[2].textContent.slice(2));
                    let num2 = Number(b.childNodes[2].textContent.slice(2));
                    return num2 - num1;
                });
                sectionCards.append(...arrayDesc)
            }
        })
    }
}

const handleFavorite = (iconHeart) => {
    return function () {
        if (iconHeart.style.color === 'red'){
            iconHeart.style.color = 'black'
        }else {
            iconHeart.style.color = 'red'
        }
    }
}

export {
    searchProduct,
    handleCategory,
    handleMinMax,
    handleFavorite
}