// 'DOMContentLoaded' ---> Espera que termine de cargar el HTML y el script "defer" para mostrar el contenido del script. No tiene en cuenta el CSS.
// Espera a que el DOM esté completamente cargado antes de intentar acceder al elemento con ID.
// se dispara cuando el DOM ha sido completamente cargado.                
//document.addEventListener('DOMContentLoaded', () => console.log('El contenido se cargó completamente.'));


/* ------------------------------- Punto 2 ------------------------------- */


document.addEventListener('DOMContentLoaded', () => {

    console.log('El contenido se cargó completamente.');


/* ------------------------------- Punto 3 ------------------------------- */


const textareaValue = document.getElementById('origen').value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

console.log(textareaValue);


/* ------------------------------- Punto 4 ------------------------------- */


const inputs = document.getElementsByTagName('input');
const btn = document.getElementsByTagName('button');

function changeStateInputs() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    for (var y = 0; y < btn.length; y++) {
        btn[y].disabled = false;
    }
}

changeStateInputs();


/* ------------------------------- Punto 5 ------------------------------- */


// addEventListener --> Registra un evento a un objeto en específico
// Al hacer onclick, el evento se activa y se ejecuta la función 
// evento - funcion --> Cuando suceda el evento, se va a ejecutar la función

// a. Botón "Reemplazar"
const btnReplace = document.getElementById('btn-reemplazar');
const divDestination = document.getElementById('destino');

btnReplace.addEventListener('click', () => {
    let textareaValue = document.getElementById('origen').value;
    divDestination.innerHTML = textareaValue;
    document.getElementById('origen').value = '';
});


/* ------------------------- REVISAR > 5.b.c.d.e ---------------------------- */


// b. Botón "Agregar"
const btnAdd = document.getElementsByClassName('btn-agregar');

// Iterar sobre la colección y agregar event listeners a cada botón
for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', function () {
        // Obtener el valor del botón clickeado
        const valorBoton = this.value;

        // Determinar el número de veces según el valor del botón
        let veces = 1;
        if (valorBoton.includes('5')) {
            veces = 5;
        } else if (valorBoton.includes('10')) {
            veces = 10;
        }

        // Llamar a la función para agregar contenido al destino
        agregarContenido(veces);
    });
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