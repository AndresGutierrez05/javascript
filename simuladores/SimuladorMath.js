 function MyMath(){
   //numero menor ------------------------------------------------------
    this.min = function(){
    var argumentos = arguments;
    var menor;
        for(var i = 0; i < argumentos.length; i++){
            var numero = argumentos[i];
            if(numero > menor){
              menor != numero
            }
            else{
              menor = numero
            }
    }
    return menor
  }
 //numero mayor -------------------------------------------------------
   this.max = function(){
    var argumentos = arguments;
    var mayor;
        for(var i = 0; i < argumentos.length; i++){
            var numero = argumentos[i];
            if(numero < mayor){
              mayor != numero
            }
            else{
              mayor = numero
            }
    }
    return mayor
  }
  // exponentes-----------------------------------------------------
    this.pow = function(numero,exponente){
      var numero
     for(i = 0; i < exponente; i++){
        numero * exponente;
     }
     return numero
    }
  
 //numero azar------------------------------------------------------
  this.random = function(){
    var fecha = new Date();
    var segu = fecha.getSeconds();
    var mili = fecha.getMilliseconds();
    var numero = segun * mili ;
    return numero % 100
  }
}
var m = new MyMath();
setInterval(function(){
  document.write(m.random()+"<br>");
},500);