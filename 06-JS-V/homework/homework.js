// No cambies los nombres de las funciones.

function crearUsuario() {

  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
    }
    Usuario.prototype.saludar = function() {
      return "Hola, mi nombre es " + this.nombre
    }
        return Usuario;

}

function agregarMetodoPrototype(Constructor) {

  Constructor.prototype.saludar = function() {
    return "Hello World!";
  }

}

function agregarStringInvertida() {

  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
