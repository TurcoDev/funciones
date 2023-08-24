let pesoGlobal = 30
let alturaGlobal = 1.68

function calcIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc
}


function clacificarIMC(imc) {
  if (imc < 18.5) {
    return "bajo"
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "normal"
  } else if (imc >= 25 && imc <= 29.9) {
    return "sobrepeso"
  } else {
    return "obeso"
  }
}

document.write("<p>El IMC es:</p>");
let valorCalculado = calcIMC(pesoGlobal, alturaGlobal)
document.write(valorCalculado);
document.write("<p>Su clasificacion es:</p>");
let clasificacion = clacificarIMC(valorCalculado);
document.write(clasificacion);
alert(clasificacion)


