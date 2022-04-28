var suma = (a,b,suma) => {
    var a = parseFloat(prompt("Hola! ingresa un número con decimales"));
    var b = parseFloat(prompt("Hola! ingresa otro número con decimales"));
    suma = parseFloat(a + b);
    console.log(`El resultado de la suma es ${suma} , donde ${a} + ${b} es igual a ${suma}`);
} 

suma();