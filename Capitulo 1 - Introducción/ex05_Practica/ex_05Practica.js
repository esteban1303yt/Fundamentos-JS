let e, f, suma, resta, multi, divide, potencia;

e = parseFloat(prompt('Ingrese un número: '));
f = parseFloat(prompt('Ingrese otro número: '));

let areaTriangulo = (e*f)/2;

suma = e + f;
resta = e - f;
multi = e * f;
divide = e / f;
potencia = e ** f;

console.log('El resultado de la suma es: ', suma);
console.log('El resultado de la resta es: ', resta);
console.log('El resultado de la multipicación es: ', multi);
console.log('El resultado de la división es: ', divide);
console.log('El resultado de la potencia es: ', potencia);
console.log('El resultado del calculo del area de un triangulo es: ', areaTriangulo);