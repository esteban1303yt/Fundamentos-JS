/*
La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en el concepto de “objetos”, que pueden contener datos y comportamientos. Es una forma de estructurar software que facilita la modelación de entidades del mundo real y la reutilización de código. La Programación Orientada a Objetos (POO) se construye sobre dos conceptos fundamentales que provienen de paradigmas anteriores: la programación con estado y el paso de mensajes. En la POO, los objetos son entidades que encapsulan tanto datos (atributos) como comportamientos (métodos), permitiendo una representación más natural y modular de las aplicaciones.

Conceptos clave
Objeto: Es una instancia de una clase, que contiene atributos (datos) y métodos (funciones o comportamientos).

Clase: Es una plantilla o molde que define las propiedades (atributos) y comportamientos (métodos) comunes para un conjunto de objetos.

Encapsulamiento: Es el mecanismo para ocultar los detalles internos de un objeto y exponer solo lo necesario mediante interfaces (métodos públicos).

Herencia: Permite crear nuevas clases basadas en clases existentes, reutilizando y extendiendo su funcionalidad.

Polimorfismo: Permite que diferentes clases implementen métodos con el mismo nombre, pero comportamientos diferentes según la clase que los implemente.

Abstracción: Consiste en enfocarse en los aspectos relevantes de un objeto, ignorando detalles irrelevantes.
*/

//Un constructor es un metodo especial dentro de una clase cuya funcion principal es inicializar un objeto cuando se crea. El constructor puede ser pensado como el encargado de dar identidad inicial a cada objeto, es decir, como cuando se compra un celular nuevo y, antes de utilizarlo, primero configura el idioma, red. cuentas, entre otras. Esto seria lo que hace el constructor: prepara el objeto para que este listo para usarse

//Constructor
//Asigna valores iniciales
//Se ejecuta automaticamente cuando se utiliza la palabra reservada new para crear un nuevo objeto
//Solo hay uno por clase (aunque puede haber sobrecarga en algunos lenguajes como Java o C#)
//Inicia los atributos (también llamados propiedades)

//Atributos
//Datos o caracteristicas que definen el estado de un objeto
//Se guardan como variables

//Métodos
//Función asociada a una clase u objeto
//Define el comportamiento o accion a realizar (logica)
//Utiliza los atributos del objeto es decir que puede modificarlos muchas veces

// Escenario
// Concensionario de Automoviles
// En la consignataria auto S.A.S en la ciudads de santiago de Cali, Valle del cauca, existen distintos tipos de vehiculos. Todos comparten algunas caracteristicas tales como: Marca, Modelo, Velocidad, entre otros. Sin embargo, cada tipo de auto tiene funciones especificas que se diferencian entre si

// 1. clase (class) = plano de Automovil
class Automovil {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar(){
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`);
    }
    frenar(){
        this.velocidad += 0;
        console.log(`${this.marca} ${this.modelo} se detuvo`);
    }
}

// 2. Objeto (Object) = Auto Real
const auto1 = new Automovil ('Toyora', 'Corolla')
auto1.acelerar();
auto1.frenar();

// 3. Herencia = Tipo de vehiculos
class camion extends Automovil{
    cargaCarga(peso){
        console.log(`${this.marca} ${this.modelo} esta cargando ${this.peso} kg`);
    }
}

const camion1 = new camion('Volvo', 'FH16')
camion1.acelerar();
camion1.cargaCarga(5000);

// 4. Encapsulamiento = Control del motor
class AutomovilEncapsulado {
  #motorEncendido = false;

  encenderMotor() {
    this.#motorEncendido = true;
    console.log("Motor encendido");
  }

  apagarMotor() {
    this.#motorEncendido = false;
    console.log("Motor apagado");
  }

  estadoMotor() {
    return this.#motorEncendido ? "Encendido" : "Apagado";
  }
}

const auto2 = new AutomovilEncapsulado();
auto2.encenderMotor();
console.log(auto2.estadoMotor());

// 5. Polimorfismo = Acelerar de distintas formas
class Deportivo extends Automovil {
  acelerar() {
    this.velocidad += 30;
    console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h (¡veloz!)`);
  }
}

class Sedan extends Automovil {
  acelerar() {
    this.velocidad += 10;
    console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`);
  }
}

const ferrari = new Deportivo("Ferrari", "488");
const nissan = new Sedan("Nissan", "Sentra");

ferrari.acelerar();
nissan.acelerar();

// 6. Abstracción = Ocultar lo complejo del arranque
class AutomovilAbstracto {
  arrancar() {
    this.#verificarSistema();
    this.#inyectarCombustible();
    console.log("¡Auto encendido!");
  }

  #verificarSistema() {
    console.log("Verificando sistemas...");
  }

  #inyectarCombustible() {
    console.log("Inyectando combustible...");
  }
}

const auto3 = new AutomovilAbstracto();
auto3.arrancar();

/*
Concepto               Ejemplo en automóviles
Clase                  Plano general de un automóvil
Objeto                 Un Ferrari real, un Toyota real
Herencia               Camión, Deportivo heredan de Automóvil
Encapsulamiento        Motor y su estado ocultos al exterior
Polimorfismo           Cada tipo de auto acelera de forma distinta
Abstracción            Solo se llama el método “arrancar”, sin saber los pasos
*/