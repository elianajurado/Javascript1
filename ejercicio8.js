function derribandoMuros(){
    var palabras = [];
    cont = 0;
    var x;
    for (let i = 0; i <=1 ; i++) {
        x = prompt("ingresa una palabra");
        palabras.push(x);
    }
    console.log(palabras[0] + " " + palabras[1]);
}