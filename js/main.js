/* ------------------------------- Punto 2 ------------------------------- */


document.addEventListener('DOMContentLoaded', () => {

    console.log('El contenido se cargó completamente.');


/* ------------------------------- Punto 3 ------------------------------- */


const textareaValue = document.getElementById('origen').value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

console.log(textareaValue);


/* ------------------------------- Punto 4 ------------------------------- */


document.getElementById('origen').oninput = function() {
    const inputs = document.getElementsByTagName('input');
    const buttons = document.getElementsByTagName('button');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
};


/* ------------------------------- Punto 5 ------------------------------- */


// a. Botón "Reemplazar"
const btnReplace = document.getElementById('btn-reemplazar');
const divDestination = document.getElementById('destino');

btnReplace.addEventListener('click', () => {
    let textareaValue = document.getElementById('origen').value;
    divDestination.innerHTML = textareaValue;
    document.getElementById('origen').value = '';
});

// b. Botón "Agregar"
let btns = document.getElementsByClassName('btn-agregar');
    btns[0].onclick = function() {
        document.getElementById('destino').innerHTML += document.getElementById('origen').value;
    }

// c. Botón "Agregar 5 veces"
    btns[1].onclick = function() {
        for(var i=0; i<5; i++)
        document.getElementById('destino').innerHTML += document.getElementById('origen').value;
    } 

// d. Botón "Agregar 10 veces"
    btns[2].onclick = function() {
        for(var i=0; i<10; i++)
        document.getElementById('destino').innerHTML += document.getElementById('origen').value;
    }                    

// d. Botón "Agregar n veces"
    btns[3].onclick = function() {
        const cant = prompt('Ingrese una cantidad')
        for(var i=0; i<cant; i++)
        document.getElementById('destino').innerHTML += document.getElementById('origen').value;
    }      


/* ------------------------------- Punto 6 ------------------------------- */


// a. Botón "Vaciar"
const btnEmpty = document.getElementsByClassName('btn-vaciar');

for (let i = 0; i < btnEmpty.length; i++) {
  btnEmpty[i].addEventListener('click', () => {
    divDestination.innerHTML = '';
  });
}

// b. Botón "Convertir a mayúsculas"
const btnUpperCase = document.getElementsByClassName('btn-convertir-a-mayusculas');

for (let i = 0; i < btnUpperCase.length; i++) {
    btnUpperCase[i].addEventListener('click', () => {
      divDestination.innerText = divDestination.innerText.toUpperCase();
    });
}

// c. Botón "Convertir a minúsculas"
const btnLowerCase = document.getElementsByTagName('button');

for (let i = 0; i < btnLowerCase.length; i++) {
    btnLowerCase[i].addEventListener('click', () => {
      divDestination.innerText = divDestination.innerText.toLowerCase();
    });
}


/* ------------------------------- Punto 7 ------------------------------- */


const liCollection = document.getElementsByTagName('li');
const string = '[Ok]';

function addString() {
    for (let i = 0; i < liCollection.length; i++) {
        liCollection[i].innerHTML = string + liCollection[i].innerHTML;
    }
}

addString()

});