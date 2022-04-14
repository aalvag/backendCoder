class usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }
    // debe recibir 4 parametros y se asigna al this.variable


    getFullName() {
        return console.log("Su nombre es:" + this.nombre + "" + this.apellido);
    }
// debe usar template string
    
    addMascotas(mascotas) {
        return this.mascotas.push(mascotas);
    }
    // esta funcion no deberia retornar nada

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        return this.libros.push(`{nombre: ${nombre}, autor: ${autor}`);
    }
  // no debe retornar nada  
    
    getBookNames() {
        this.libros.map((libro) => {
            return libro.nombre;
        });
    }
    
}

let referencia = new usuario("Lucas", "Poma");
let referencia2 = new usuario("Mariana", "Gomez");
let referencia3 = new usuario();
let referencia4 = new usuario();

// debes crear un objeto llamdo usuario con valores
// const usuario = new usuario({...crear el objeto})

referencia.getFullName();
referencia2.getFullName();
referencia3.addMascotas("gato")
referencia3.addMascotas("perro")

console.log(`La cantidad de mascotas es de ${referencia3.countMascotas()} `);

referencia4.addBook("La Herencia", "John Grisham");

console.log(`Libro: ${referencia4.getBookNames()}`);

// no hagas console.log simplemente ejecuta los metodos
