function frase (){
    var text1 = prompt("Ingresa una frase");
    console.log(text1);
    var text2 = prompt("Ingresa otra frase");
    console.log(text2);
    var length1 = text1.length;
    var length2 = text2.length;
    if((length1%2==0) && (length2%2==0)){
        return true;
    }else{
        return false;
    }
}