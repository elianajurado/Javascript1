function texto (){
    var palabra_uno = prompt("Ingresa una palabra");
    console.log("La frase que escribiste es "+ palabra_uno +" y el caracter en primer lugar es: "+ palabra_uno.charAt(0));
    var numero = parseInt(prompt("Ingresa un numero menor a: "+ palabra_uno.length));
    palabra_uno.split(" ");
    console.log("El caracter en esa posición es: "+ palabra_uno[numero]);
}