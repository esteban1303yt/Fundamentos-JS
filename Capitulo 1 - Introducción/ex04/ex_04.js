// Pedir datos a un usuario (Como eercicio pues cuando se piden datos se utilizan inputs).

let nombre, edad, direccion, movil, email; // Se pueden crear tantas variables como se necesiten con una declaracion let

// Prompt es una palabra reservada que despliega una funcion y sale un mensaje de tipo alerta para pedir datos.

nombre = prompt('Escriba su nombre: '); // Se piden los datos al usuario
document.writeln('Su nombre es: ', nombre, '<br>'); // Se imprimen los datos proporcionados por el usuario
edad = prompt('Escriba su edad: '); // Se piden los datos al usuario
document.writeln('Su edad es: ', edad, '<br>'); // Se imprimen los datos proporcionados por el usuario
direccion = prompt('Escriba su direccion: '); // Se piden los datos al usuario
document.writeln('Su direccion es: ', direccion, '<br>'); // Se imprimen los datos proporcionados por el usuario
movil = prompt('Escriba su movil: '); // Se piden los datos al usuario
document.writeln('Su movil es: ', movil, '<br>'); // Se imprimen los datos proporcionados por el usuario
email = prompt('Escriba su email: '); // Se piden los datos al usuario
document.writeln('Su email es: ', email, '<br>'); // Se imprimen los datos proporcionados por el usuario

// Con la etiqueta <br> se pueden realiza saltos de pagina

console.log('Tu nombre es: ', nombre, '<br>');
console.log('Tu edad es: ', edad, '<br>');
console.log('Tu direccion es: ', direccion, '<br>');
console.log('Tu movil es: ', movil, '<br>');
console.log('Tu email es: ', email, '<br>');