var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here
var name = "Ralph"


// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten(){
kittens.pop(name)
return kittens
}

function destructivelyRemoveFirstKitten(){
kittens.shift(name)
return name
}

function appendKitten(name){
kittens = [...kittens, name]
console.log(kittens)
return kittens
}

function prependKitten(name){

}

function removeLastKitten(){

}

function removeFirstKitten(){

}
