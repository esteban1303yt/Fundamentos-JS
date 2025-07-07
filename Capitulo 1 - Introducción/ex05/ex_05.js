// Operadores matematicos
let a, b; // Aqui da error.
let c, d; // Aqui las operaciones van a dar el resultado real.
let suma, resta, multiplicacion, division, residuo, potencia; // Variables para obtener los resultados de los operandos.

a = prompt('Ingrese un número: ');
b = prompt('Ingrese otro número: ');

// Resultados de las operaciones
suma = a + b; // Aqui la operacion no se da debido a qu se concatenan los valores por el operando +
resta =  a - b;
multiplicacion = a * b;
division = a / b
residuo = a % b;
potencia = a ** b;

// Imrpimir resultados
document.writeln(
    'La suma es: ', suma, '<br>',
    'La resta es: ', resta, '<br>',
    'La multiplicacion es: ', multiplicacion, '<br>',
    'La division es: ', division, '<br>',
    'La residuo es: ', residuo, '<br>',
    'La potencia es: ', potencia, '<br>'
);

document.writeln('<br>') // Salto de línea

// Segunda operación
// Para que las operaciones númericas se puedan dar correctamente, se deben convertir los datos ingresados con parseInt o parseFloat

// Obtener datos ingresados por el usuario

/*
c = parseInt(prompt('Ingrese un número: '));
d = parseFloat(prompt('Ingrese otro número: '));

suma = c + d;
resta =  c - d;
multiplicacion = c * d;
division = c / d
residuo = c % d;
potencia = c ** d;

document.writeln(
    'La suma es: ', suma, '<br>',
    'La resta es: ', resta, '<br>',
    'La multiplicacion es: ', multiplicacion, '<br>',
    'La division es: ', division, '<br>',
    'La residuo es: ', residuo, '<br>',
    'La potencia es: ', potencia, '<br>'
);*/