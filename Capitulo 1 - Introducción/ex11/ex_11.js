/* Operadores Lógicos

Los operadores lógicos permiten combinar valores booleanos (true o false) para crear expresiones condicionales más complejas. Son fundamentales para el control de flujo en los programas, ya que permiten evaluar múltiples condiciones al mismo tiempo.

En JavaScript, los operadores lógicos más comunes son:

Operador AND (&&): Retorna true solo si ambas condiciones son verdaderas. Si alguna es falsa, retornará false.
Operador OR (||): Retorna true si al menos una de las condiciones es verdadera. Solo retorna false si todas las condiciones son falsas.

### Tabla de la verdad

Para comprender mejor cómo funcionan estos operadores, podemos utilizar una tabla de verdad. Esta tabla muestra todas las posibles combinaciones de dos condiciones (A y B) y el resultado que retornan los operadores && y ||:

| A      | B      | A && B | A || B |
|--------|--------|--------|--------|
| true   | true   | true   | true   |
| true   | false  | false  | true   |
| false  | true   | false  | true   |
| false  | false  | false  | false  |

Como se observa:
- El operador AND (&&) solo devuelve true si ambas condiciones son verdaderas.
- El operador OR (||) devuelve true cuando al menos una de las condiciones es verdadera.

Estos operadores son muy útiles en las estructuras condicionales para tomar decisiones en función de varias condiciones al mismo tiempo.

### Tabla de la verdad con el operador NOT

El operador NOT (!) invierte el valor booleano de la condición, es decir, si es true, lo convierte en false y viceversa. A continuación se muestra cómo funciona junto con las condiciones A y B:

| A      | B      | !A     | !B     | A && B | A || B |
|--------|--------|--------|--------|--------|--------|
| true   | true   | false  | false  | true   | true   |
| true   | false  | false  | true   | false  | true   |
| false  | true   | true   | false  | false  | true   |
| false  | false  | true   | true   | false  | false  |

En esta tabla, además de mostrar los resultados de A && B y A || B, también vemos cómo el operador NOT (!) invierte los valores:
!A devuelve false si A es true, y devuelve true si A es false.
!B funciona de la misma manera para B.

Con este operador, se puede negar cualquier condición y obtener el valor opuesto, lo cual es útil en muchas situaciones donde se requiere evaluar lo contrario de una expresión lógica.

### Tabla de la verdad completa (AND, OR, NOT)

| A      | B      | !A     | !B     | A && B | A || B |
|--------|--------|--------|--------|--------|--------|
| true   | true   | false  | false  | true   | true   |
| true   | false  | false  | true   | false  | true   |
| false  | true   | true   | false  | false  | true   |
| false  | false  | true   | true   | false  | false  |

Como se observa en la tabla:
- El operador AND (&&) solo devuelve true si ambas condiciones son verdaderas.
- El operador OR (||) devuelve true cuando al menos una de las condiciones es verdadera.
- El operador NOT (!) invierte el valor de las condiciones A y B.

Esta tabla muestra claramente cómo los operadores lógicos interactúan entre sí para todas las combinaciones posibles de true y false. Es escencial para comprender la lógica y utilizar condicionales de manera eficiente en JavaScript.

*/

let a, b;

a = 20;
b = 30;

console.log(a == b);

//En el operador && = Y, Deben cumplirse dos condiciones para retornar a true.
//En este ejercicio no se considera ciudadano a quien no tenga 18 años.

let pais, edad;
pais = prompt('Ingrese su pais de procedencia...');
edad = prompt('Ingrese su edad...');

if (pais == 'Colombia' && edad >= 18){
    document.writeln('Eres ciudadano del pais de ', pais);
} else {
    document.writeln('No eres ciudadano del pais de Colombia');
}

//Operador || = O
let day, month, year;

//Solicitud del día, el mes y año, luego se verifica que los valores sean numericos.

day = prompt('Digite el día en numeros');
month = prompt('Digite el mes en numeros');
year = prompt('Digite el año en numeros');

//Convertir los valores digitados por el usuario a enteros
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

//Validar que los valores ingresados sean validos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.writeln('Por favor, ingrese solamente valores numericos para el día, mes y año');
} else if (month == 1 || month == 2 || month == 3 ) {
    document.writeln('Pertenece al primer trimestre del año');
} else {
    document.writeln('No pertenece al pimer trimestre del año');
}