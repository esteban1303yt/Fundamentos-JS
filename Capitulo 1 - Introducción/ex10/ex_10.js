/* Condicionales

Funcionalidades que permiten mejorar la toma de deciciones en la ejecución del código, estas  se basan en evaluar i una o mas condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones, parámetros o condciones especificas

Ahora bien, se puede verificar si se cumple una condición determinada tiene un resultado especifico, el pograma se ejecutara dentro de las intrucciones dadas.

*/

// Condicional if() else{}

let nombre, edad;
nombre = prompt('Ingresa tu nombre:');
edad = prompt('Ingresa tu edad: ');
edad = parseInt(edad);

if (edad >= 18) {
    document.writeln('Tú eres mayor de edad');
    console.log('edad digitada: ', edad, 'mayor de edad');
} else {
    document.writeln('Tú eres menor de edad');
    console.log('edad digitada: ', edad, 'menor de edad');
}