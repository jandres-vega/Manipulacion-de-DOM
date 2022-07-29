//creo un array vacio para guardar todos los inputs de 0 a 9 de tipo submit
let arrayNumbers = [];

//creo un array vacio para guardar todos los inputs de operadores de tipo submit
let arrayOperators = [];

//creo 2 variables para guardar los valores que ingresan en el input de tipo text
let number1 = 0;
let number2 = 0;

//creo una variable![](../public/cooltext416345541170665.png) para guardar los operadores
let operador = '';

let resultado = 0;
let validar = false;

//en esta seccion obtengo todos las etiquetas de mi html y las guardo en varibles
const operators = document.querySelectorAll('.inp-operaciones');

const numbers = document.querySelectorAll('.inp-numbers');

const restart = document.querySelector('.inp-restart');

const lessMore = document.querySelector('.inp-less-more');

const clear = document.querySelector('.inp-clear');

const equals = document.querySelector('.inp-equals');

const display = document.querySelector('.inp-display');

//le agrego un evento al display para que no se pueda agregar
// letras al input por parte del teclado
display.addEventListener('keypress', (e) => {
    e.preventDefault();
    let valorKey = String.fromCharCode(e.keyCode);
    let number = parseInt(valorKey);
    if (number) display.value += number;
})

//recorro cada uno de los nodeList que me guado en la anterior
// parte para guardarlos en los array creados
numbers.forEach((item) => {
    arrayNumbers.push(item);
})
operators.forEach((item) => {
    arrayOperators.push(item);
})

//cree una clase que es donde va tener los metodos para hacer operaciones basicas
class Operaciones {

    suma (num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }
    resta (num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }
    multiplicacion (num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }
    division (num1, num2) {
        if (num2 === '0'){
            return 'no se puede dividir entre 0';
        }else {
            return parseFloat(num1) / parseFloat(num2);
        }
    }
}

//funcion creada para asignarle una operacion a la calculadora
const addOperator = (e) => {
    if (e.target.value === '+') {
        number1 = display.value;
        operador = e.target.value;
        clearDisplay();
    }else if (e.target.value === '-') {
        number1 = display.value;
        operador = e.target.value;
        clearDisplay();
    }
    else if (e.target.value === 'x') {
        number1 = display.value;
        operador = e.target.value;
        clearDisplay();
    }
    else if (e.target.value === '/') {
        number1 = display.value;
        operador = e.target.value;
        clearDisplay();
    }
}

//creo una funcion para agregar los valores ingresados por el usuario
//al input de tipo texto
const addNumber = (e) => {

    if (display.value === '0' || validar )  {
        validar = false
        display.value = e.target.value;
    }
    else {
        if(e.target.value === '.' &&  ! display.value.includes('.')) {
            display.value += e.target.value;
        }else if(e.target.value !== '.'){
            display.value += e.target.value;
        }else {
            return null
        }
    }
}

//recorro los array para agregarle los eventos pertinentes
for (let i = 0; i < arrayNumbers.length ; i++) {
    arrayNumbers[i].addEventListener('click', addNumber);
}
for (let i = 0; i < arrayOperators.length ; i++) {
    arrayOperators[i].addEventListener('click', addOperator);
}

//esta funcion fue creada para asignarle un signo menos o no al valor del input de tipo texto
lessMore.addEventListener('click', (e) => {

    e.target.value === "+/-" && !display.value.includes("-")
        ? display.value = '-' + display.value
        : display.value = display.value.slice(1);
})

//esta funcio es creada para limpiar los valores del input
clear.addEventListener('click', () => {
    display.value = display.value.slice(0, display.value.length - 1);
})

//funcion para dar el resultado de la operacion llamando a un
// metodo que se encarga de resolver las operaciones
equals.addEventListener('click', function () {
    number2 = display.value;
    validar = true
    resolver();
})

//funcion creada para resetear los valores de la calculadora
function resetear() {
    number1 = 0;
    number2 = 0;
    operador = '';
    // clearDisplay();
}

//funcion para resolver las operaciones instanciando una clase
const resolver = () => {

    // let resultado = 0;
    const opr = new Operaciones();

    switch (operador) {
        case '+':
            resultado = opr.suma(number1, number2);
            break;
        case '-':
            resultado = opr.resta(number1, number2);
            break;
        case 'x':
            resultado = opr.multiplicacion(number1, number2);
            break;
        case '/':
            resultado = opr.division(number1, number2);
            break;
    }
    resetear();
    display.value = resultado;
}

//limpiar el input
function clearDisplay () {
    display.value = '';
}


//funcion para setear el valor del input en 0
restart.addEventListener('click', function () {
    display.value = '0';
})

//de forma aprendizage cree un elemto img para agregarlo al html
const divImagen = document.querySelector('.div-img');
const logo = document.createElement('img');
logo.src = './cooltext416345541170665.png';
divImagen.appendChild(logo);





