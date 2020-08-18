// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
if (x > y) {  
   return x;
 } else return y;
}
 

function saludo(idioma) {
 if (idioma === "aleman") {
    return "Guten Tag!"; } 
    else if (idioma === "mandarin") {
      return "Ni Hao!"; 
    } else if (idioma === "ingles") {
      return "Hello!" 
    } else { return "Hola!";}          
}

function esDiezOCinco(numero) {
  
  if (numero === 10 || numero === 5) {
      return true; }
      else {
        return false; }
    }


function estaEnRango(numero) {

  if (numero <50 && numero >20) {
    return true; }
    else {
    return false; }
  }


function esEntero(numero) {
  
  return numero % 1 === 0;
}

function fizzBuzz(numero) {

  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz"; 
 
  return numero; 

}

function esPrimo(numero) {

  if (numero < 2) return false;

  for (var i = 2;  i < numero; i++) 
  
    if (numero % i === 0) {
      return false; } 
      
    return true;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
