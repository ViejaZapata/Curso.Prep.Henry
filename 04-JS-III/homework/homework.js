// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    return array [0] 
}

function devolverUltimoElemento(array) {

  return array [array.length -1];

}

function obtenerLargoDelArray(array) {
 
  return array.length
}

function incrementarPorUno(array){
  var Lista = [];
  for ( var i=0; i<array.length; i++) {
    Lista [i] = array [i] + 1;
  } return Lista;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento;
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  
  array [1, 2, 3];

  array.unshift (elemento);

  return array;
}

function dePalabrasAFrase(palabras) {

  frase = palabras.join(' ');
  return frase;

}
function arrayContiene(array, elemento) {
  
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      return true;
    }
  }
  return false;
}
         
  function agregarNumeros(numeros)  {

    var suma = 0;
  for(var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;

}
function promedioResultadosTest(resultadosTest) {

  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
}

function multiplicarArgumentos() {
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
