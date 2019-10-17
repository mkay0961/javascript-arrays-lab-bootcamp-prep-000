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
return [...kittens, name]
}

function prependKitten(name){
return [name, ...kittens]
}

function removeLastKitten(){
console.log(kittens.Length)
kittens.slice(kittens.Length)
return kittens
console.log(kittens)

}

function removeFirstKitten(){

}
