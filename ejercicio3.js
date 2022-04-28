var ejerciciotres = (multiplicacion,suma) => {
    var a = parseInt(prompt("Hola! ingresa un número"));
    var b = parseInt(prompt("ingresa otro número"));
    suma = parseInt(a + b);
    console.log(`El resultado de la suma es ${suma}`);
    var c = parseInt(prompt("Ingresa otro número por favor!"));
    var multiplicacion = parseInt(suma*c);
    console.log(`El resultado de la multiplicación entre la suma y el tercer número ingresado ${c} es ${multiplicacion}`);
} 

ejerciciotres();