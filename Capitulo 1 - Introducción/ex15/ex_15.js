//Funciones

// function saludo(){
//     document.writeln('Hola mundo', '<br>');
//     console.log('Hola mundo');
// }

// saludo();

// function despedida(){
//     document.writeln('Adios', '<br>');
//     console.log('Adios');
// }

// despedida();

// //Funciones que reciben parámetros
// function saludarUsuario(nombreUsuario, apellidoUsuario){
//     document.writeln('Hola ', nombreUsuario, ' ', apellidoUsuario, ', bienvenido(a)')
// }

// let nombre = prompt('Dime tu nombre')
// let apellido = prompt('Dime tu apellido')

// saludarUsuario(nombre, apellido);

// function saludarUsuario(nombrePaciente, apellidoPaciente){
//     document.writeln('Hola ', nombrePaciente, ' ', apellidoPaciente, ', bienvenido(a)')
// }

// let recepcionaNombrePaciente = prompt('Dime tu nombre')
// let recepcionaApellidoPaciente = prompt('Dime tu apellido')

// saludarPaciente(nombrePaciente, apellidoPaciente);

//Funciones con cálculos simples

// function calcularAreaRectangulo(base, altura){
//     let area = base * altura;
//     return area;
// }
// console.log('El área del rectangulo es: ', area = calcularAreaRectangulo(5, 10));

// function esMayorMenorEdad(edad){
//     if(edad >= 18) {
//         console.log('Es mayor de edad')
//     } else {
//         console.log('Es menor de edad')
//     }
// }

// esMayorMenorEdad(20);
// esMayorMenorEdad(12);

// function suma(){
//     let a = parseInt(prompt('Ingrese el primer número a sumar:'));
//     let b = parseInt(prompt('Ingrese el segundo número a sumar:'));
//     return a + b; //Devuelve la suma con los números ingresados por el usuario.
// }
// document.writeln('El resultado de la suma es: ', suma(), '<br>');

function verColor(){
    valor = parseInt(prompt('Por favor ingrese números entre 1 y 3 para activa el semáforo'));
    
    switch(valor){
        case 1:
            return 'Rojo';
        case 2:
            return 'Verde';
        case 3:
            return 'Amarillo';
        default:
            return 'El valor ingresado es invalido'
    }
}
document.writeln('Perfecto, has elegido el color: ', verColor());

