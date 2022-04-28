var comprasCompulsivasAtuEdad = () => {
    var edad = parseInt(prompt("Ingresa tu edad por favor"));
    var comprasNintendo = parseInt(prompt("Ingresa cuantos artículos has comprado en nintendo"));
    if(edad=>18 && (comprasNintendo=>1)){
        return false;
    }else{
        return true;
    }
}

comprasCompulsivasAtuEdad();