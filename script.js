var persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    edad: 30,
    ciudad: 'Bahia Blanca',
    saludar: function() {
        console.log ('Hola, mi nombre es '  + this.name);
    }
}

let parrafo = document.getElementById('titulo');
let parrafoape = document.getElementById('apellido')
let parrafo2 = document.getElementById('edad');
let parrafo3 = document.getElementById('mensaje');

parrafo.innerHTML= persona.nombre;
parrafoape.innerHTML = persona.apellido;
parrafo2.innerHTML = persona.edad;
parrafo3.innerHTML = persona.saludar();

// Practica de Dom

let contenedor = document.create
//

function obtenerDatos(){
    fetch('https://eduteca-b48db-default-rtdb.firebaseio.com/cursos.json')
    .then(response => response.json())
    .then(data => {
        const cardDeck = document.getElementById('card-deck');
        cardDeck.innerHTML = '';

        for(let key in data) {
            const objeto = data[key];

            const card = document.createElement('div');
            card.classList.add('card');

            const imagen = document.createElement('div');
            imagen.classList.add('card-img-top');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            const titulo = document.createElement('h5');
            titulo.classList.add('cart-title');
            titulo.textContent = objeto['nombrecurso'];

            const duracion = document.createElement('p');
            duracion.classList.add('card-text');
            duracion.textContent = 'Duracion' + objeto.duracion + 'horas';

            const valor = document.createElement('p');
            valor.classList.add('card-text');
            valor.textContent = 'Valor: $' + objeto.valor;

            cardBody.appendChild(titulo);
            cardBody.appendChild(duracion);
            cardBody.appendChild(valor);

            cardBody.appendChild(imagen);
            cardBody.appendChild(cardBody);

            cardDeck.appendChild(card);
        }
    });

    obtenerDatos();

    
}