function numMenor(){
    var num_one= parseInt(prompt("Ingresa el primer número"))
    console.log(num_one)
    var num_two= parseInt(prompt("Ingresa el segundo número"))
    console.log(num_two)
    var num_three= parseInt(prompt("Ingresa el tercer número"))
    console.log(num_three)
    if(num_one<num_two){
        if(num_one<num_three){
            console.log("El numero menor es: " + num_one)
        }else{
            console.log("El numero menor es: "+ num_three) 
        } 
    }else if(num_two<num_three){
        console.log("El numero menor es: "+num_two)
    }else{
        console.log("El numero menor es: " +num_three)
    }
}