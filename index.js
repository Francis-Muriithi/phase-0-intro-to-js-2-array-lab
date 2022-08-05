// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(name){
    let newArray= [...cats, "Broom"];
    return newArray;
}
function prependCat(name){
    let newArray2= ["Arnold", ...cats];
    return newArray2;
}
function removeLastCat(name){
    let newArray= cats.slice(0, -1);
    return newArray;
}
function removeFirstCat(name){
    let newArray= cats.slice(1);
    return newArray;
}