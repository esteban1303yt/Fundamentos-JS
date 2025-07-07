// Mostrar los números del 1 al 5
// Se usa cuando sabemos cuantas veces queremos repetir algo.
for (let numero = 1; numero <= 5; numero++) {
    console.log("Número actual; ", numero);
}


// Mostrar los datos de una persona
// Se usa para recorrer las propiedades de un objeto.
let persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Bogotá"
};

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Contar hasta 3 con un while
// Se usa cuando no sabemos cuantas veces, pero tenemos una condición que se evalúa antes de entrar.
let contador = 1;

while (contador <=3) {
    console.log("Contador:", contador);
    contador++;
}

// Igual que while, pero siempre ejecuta al menos una vez.
// Mostrar el menu hasta que el usuario elija "Salir"
let opcion = "";

do {
    opcion = prompt("Escribe una opción (Escribe 'Salir' para terminar);");
    console.log("Eligiste:", opcion);
} while (opcion !== "Salir");

// Este se usa para recorrer valores de arreglos (no objetos).
// Recorrer una lista de frutas
let listaDeFrutas = ["manzana", "banana", "uva"];

for (let fruta of listaDeFrutas) {
    console.log("Fruta:", fruta);
}

// Ciclo de numeros pares
document.writeln('Ciclo de numeros pares');

for(let x = 2; x <= 20; x+=2) {
    document.writeln(`Valor de x = ${x}`, `<br>`);
}

let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese el usuario...');
clave = prompt('Ingrese su contraseña...');

do {
    if(clave != 'MiContraseña'){
        clave = prompt('Contraseña incorrecta, Inténtelo de nuevo...');
        control = 0; //Continuara valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema.
    } else {
        control = 1; //Control vadra uno cuando la contraseña ingresada sea la corecta.
    }
} while (control != 1); 
// La contraseña ingresada es verificada por control, si vale 1 le dara acceso al sistema sino continuara pidiendola hasta que se cumpla  la condición o usted programe los intentos.
document.writeln('Acceso condedido!, Bienvenido');

//Saber cuantas vocales tiene la palabra murciélago.

let Palabra = "Murcielagos";
let vocal = 0 //En esta variable vocal se van a guardar la cantidad de vovales que se encuentren en la palabra.

for(let p in Palabra){
    if(Palabra[p]=='a' || Palabra[p]=='e' || Palabra[p]=='i' || Palabra[p]=='o' || Palabra[p]=='u') //El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas en la busqueda.
    {
        vocal++;
    }
}
document.writeln('Cantidad de vocales: ', vocal);