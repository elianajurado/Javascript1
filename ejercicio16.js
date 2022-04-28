var ejercicio16 = () => {
    var nom_one = prompt("Ingresa tu nombre")
    console.log(nom_one)
    var nom_two = prompt("Ingresa el nombre de tu madre")
    console.log(nom_two)
    var last_word_nom_one = nom_one.length-1
    var last_word_nom_two = nom_two.length-1
    console.log((nom_one[0] == nom_two[0]) || (nom_one[last_word_nom_one] == nom_two[last_word_nom_two]))
}