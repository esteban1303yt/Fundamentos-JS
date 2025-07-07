/*POO

Los paradigmas principalmente que dan paso a la POO son con estado, junto con el imperactivo y el declarativo

Pilares de la programación orientada a objetos

Abstración: Oculta detalles internos y muestra las características relevantes.

Encapsulamiento: Protege los datos de un objeto para evitar accesos inhadebidos, promoviendo el uso de métodos públicos para interactuar con ellos.

Herencia: Permite que una clase reutilice los atributos y métodos de otra, promoviendo la extensión y personalización.

Polimorfismo: Habilidad de un método o función para comportarse de diferentes maneras según el objeto o los argumentos con los que interactua.

*/

class Vehiculo {

    constructor(marca, modelo, color, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ano = ano;
        this.encendido = false;
    }
    encender(){
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} esta encendido.`)
    }
    apagar(){
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} esta apagado.`)
    }
    tocarBocina(){
        this.encendido = false;
        console.log("¡Beep! ¡beep!");
    }
    mostrarInfo(){
        this.encendido = true;
        console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.ano}) - Color: ${this.color}`)
    }
}

//Crear instancia
const miAuto = new Vehiculo("Toyota","Corolla", "Rojo", 2020);

//Probar los metodos
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//Clase animales
class Animal {
    constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido = sonido;  
    }
    hacerSonido(){
        console.log(`${this.nombre} dice: ${this.sonido}`)
    }
    describir(){
        console.log(`${this.nombre} es un: ${this.especie}`)
    }
}

//Crear instancia
const miPerro = new Animal("Bruno", "Perro", "Guau guau");
const miGato = new Animal("Karin", "Gato", "MiauWwW");

//Probar los étodos
miPerro.describir();
miPerro.hacerSonido();

miGato.describir();
miGato.hacerSonido();