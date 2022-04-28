var convertidorTemperatura = () => {
    var farenheit = parseFloat(prompt("Ingresa la temperatura en grados ferenheit"));
    var celsius = parseFloat((5/9)*(farenheit-32));
    console.log(`La temperatura en grado celsius es ${celsius}`);
} 

convertidorTemperatura();