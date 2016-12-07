function Miarreglo(){
  var argumentos = arguments;
  var arreglo = argumentos;
  this.lengt = 0;
  this.lengt = (function(){
    var cantidad
    for(i in argumentos){
    }
    cantidad = i;
    return cantidad;
})();

  this.tostring = function(){
   for(var i = 0; i < this.lengt ; i++){
        arreglo[i] = argumentos[i]; 
    }
    return ""+ arreglo +""
  }
}
var m = new Miarreglo(1,2,3,5);
console.log(m.lengt);
console.log(m.tostring());