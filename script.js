// Ejercicio 1
let button = document.getElementsByTagName("button");
let body = document.getElementsByTagName("body")[0];
button[0].style.color = "white";
button[1].style.color = "white";
body.style.background = "red";

function coloret(){
    if(button[0].style.color == "white"){
        button[0].style.color = "red";
        body.style.background = "white";
    }else{
        button[0].style.color = "white";
        body.style.background = "red";
    }
}
// Ejercicio 2
function coloret2(){
    let i = 0;
    while(i <= 2){
        i++;
        button[1].style.color = "red";
    }
    button[1].style.color = "white";
}
// Ejercicio 3 Funcion Factorial de un numero;
function multiplicacion(){

    let factorial = 1;
    let div = document.getElementsByTagName("div");
    let input = document.getElementById("input").value;
    for(let i = 1; i <= input; i++){
        factorial *= i;
    }
    div[0].innerHTML = factorial;
    console.log("Factorial de " + input + ":");
    console.log(div[0].innerHTML = factorial);
}
// Ejercicio 4
function mitjanaImparells(llista){
    let suma = 0;
    let i = 0;
    while(i < llista.length){
        i++;
        if(llista[i] % 2 == 1){
            suma += llista[i];
        }
        return suma;
    }
}
let lista = [3,5,6,4,7,1];
console.log("- Array Normal: ");
console.log(lista);
console.log("Mitjana: " + mitjanaImparells(lista));

// Ejercicio 5
function inverteix(){
    for(let i = 0; i < lista.length; i++){
        console.log("- Array Invertida: ");
        console.log(lista.splice("").reverse());
    }
}
console.log(inverteix());

// Ejercicio Matrices

let rows = document.querySelector("tbody").children;
let matriu = [];
for(let i = 0; i < rows.length; i++){
    matriu.push(rows[i].children);
}
// Funcion limpiar matriz
function erase(){
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < matriu[i].length; j++){
            matriu[i][j].style.backgroundColor = "white";
        }
    }
}
// Ejercicio 6
function pinta(){
    erase();
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < matriu[i].length; j++){
            for(let a = -1; a <= 1; a++){
                for(let b = -1; b <= 1; b++){
                    if(!(a == 0 && b == 0)){
                        matriu[4+a][1+b].style.backgroundColor = "red";
                    }
                }
            }
        }
    }
}
// Ejercicio 7
function pintaDiagonals(){
    erase();
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < matriu[i].length; j++){
            if(i > j == 0 && i < j == 0){
                matriu[i][j].style.backgroundColor = "red";
            }
        }
    }
}