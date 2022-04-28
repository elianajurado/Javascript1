var showsMusicales = () =>{
    const showsVistos = parseInt(prompt("Cuantos shows musicales has visto este año?"));
    console.log("Shows vistos en el año " + showsVistos);
    if(showsVistos<=3){
        return false;
    }else{
        return true;
    }
}