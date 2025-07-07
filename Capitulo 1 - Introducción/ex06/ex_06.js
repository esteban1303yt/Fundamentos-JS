/* ====== Operadores ====== */

//Operadores de asignación

let a = 1;

document.writeln('El valor de a =', a);
document.writeln('<br>'); //Se crea etiqueta <br> desde javascript como elemento HTML para hacer saltos de paginación.
console.log('El valor de a =', a);

a++; //El operador ++ aunmenta o incrementa el valor en uno.
document.writeln('El valor de a =', a);
console.log('El valor de a =', a);
document.writeln('<br>');

a+=5; //El operador += aumenta o incrementa el valor de la variable dependiendo del valor qu se onga luego del igual.
document.writeln('El valor de a =', a);
console.log('El valor de a =', a);
document.writeln('<br>');

a--; //El operador -- decreta el valor en uno.
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a-=2; //El operador -= resta el valor de la variable dependiendo del valor que se ponga luego del igual.
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a*=2; //El operador *= multiplica el valor de la variable dependiendo del valor que se quiera multiplicar.
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a/=4; //El operador /= divide el valor de la variable dependiendo del valor que se quiera dividir.
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

a**=3; //El operador ** potencia el valor de la variable dependiendo del valor que se digite a potenciar.
document.writeln('El valor de a =', a, '<br>');
console.log('El valor de a =', a);

//Operaciones de comparación

//Los operadores de comparación sirven para comparar cantidades o valores entre variables.

/*
= es el operador de asignación
> es el operador de mayor que
< es el operador de menor que
!= es el operador diferente de
>= es el operador de mayor o igual que
<= es el operador menor o igual que
*/

let valorUno, valorDos; //Se declaran las variables
//Utilidad del operador de asignación
valorUno=20 //Se inicializa la variable con un valor de tipo entero
valorDos=10 //Se inicializa la variable con un valor de tipo entero

// Operador mayor que >
document.writeln(valorUno > valorDos, '<br>');
console.log(valorUno > valorDos);
//El sistema verificará si la variable uno es mayor que la dos y devolverá un resultado booleano es decir: falso o verdadero (true or false).

// Operador menor que <
document.writeln(valorUno < valorDos, '<br>');
console.log(valorUno < valorDos);
//El sistema verificará si la variable uno es menor que la dos y devolverá un resultado booleano es decir: falso o verdadero (true or false).

//Operador == Igual que
document.writeln(valorUno === valorDos, '<br>');
console.log(valorUno == valorDos);
//El sistema verfica si las variables son iguales de lo contrario dara false

//Operador != Diferente de
document.writeln(valorUno != valorDos, '<br>');
console.log(valorUno != valorDos);
//El sistema verifica si las variables son diferentes en caso que si lo sean dará true

// Operador mayor o igual que >=
document.writeln(valorUno >= valorDos, '<br>');
console.log(valorUno >= valorDos);
//El sistema verificará si la variable uno es mayor o igual que la dos y devolverá un resultado booleano es decir: falso o verdadero (true or false).

// Operador menor que o igual <=
document.writeln(valorUno <= valorDos, '<br>');
console.log(valorUno <= valorDos);
//El sistema verificará si la variable uno es menor o igual que la dos y devolverá un resultado booleano es decir: falso o verdadero (true or false).