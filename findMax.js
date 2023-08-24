

function findMax(numero1, numero2, numero3) {

  if (numero1 > numero2 && numero1 > numero3){
    return numero1;
  } else if (numero2 > numero1 && numero2 > numero3){
    return numero2;
  } else if (numero3 > numero2 && numero3 > numero1){
    return numero3;
  } else {
    return null;
  }
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))
console.log(findMax(13, 8, 6))
console.log(findMax(6, 6, 6))