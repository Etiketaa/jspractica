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
