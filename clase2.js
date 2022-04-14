class usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }


    getFullName() {
        return console.log("Su nombre es:" + this.nombre + "" + this.apellido);
    }

    addMascotas(mascotas) {
        return this.mascotas.push(mascotas);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        return this.libros.push(`{nombre: ${nombre}, autor: ${autor}`);
    }

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

referencia.getFullName();
referencia2.getFullName();
referencia3.addMascotas("gato")
referencia3.addMascotas("perro")

console.log(`La cantidad de mascotas es de ${referencia3.countMascotas()} `);

referencia4.addBook("La Herencia", "John Grisham");

console.log(`Libro: ${referencia4.getBookNames()}`);