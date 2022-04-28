var motocicleta = () => {
    var a = parseFloat(prompt("Ingresa la cantidad recorrida por una moticicleta en km"));
    var b = parseFloat(prompt("Ingresa la cantidad de litro de gasolina consumidos en esta distancia"));
    console.log(`Kilometros recorridos: ${a}`)
    console.log(`Litros de combustible gastado: ${b}`)
    var c = parseFloat(a/b);
    console.log(`El consumo por kilometro es: ${c}`)
} 

motocicleta();