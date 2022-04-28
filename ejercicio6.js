function promedio(){
    var numeros = [];
    var cont = 0;
    var x;

    for (let i = 0; i<=2; i++) {
        x = parseInt(prompt("Ingresa un numero"));
        numeros.push(x);
    } 
    const sumaArray = numeros.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        cont
      );
    const promedioNumero = parseFloat(sumaArray/numeros.length);
    console.log(numeros)
    console.log(sumaArray)
    console.log(promedioNumero)
}

promedio();