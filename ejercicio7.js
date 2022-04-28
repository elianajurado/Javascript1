var porcentaje = () => {
    const numero = parseInt(prompt("Hola! ya sabemos que quieres conocer el porcentaje, así que ingresa el número :D"));
    const ecuacion = parseInt(numero - (numero*0.15))
    console.log(ecuacion);
}

porcentaje();