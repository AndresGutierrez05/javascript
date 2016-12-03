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
  /*this.random = function(){
    var fecha = new Date();
    var segu = fecha.getSeconds();
    var mili = fecha.getMilliseconds();
    var numero = segun * mili ;
    return numero % 100
  }*/
  this.random = function(min,max){
    var random = new Date();
    var milli = random.getMilliseconds();
    var numero = 0
    var validar = min * milli;
    while(numero === 0){
      if(validar >= max){
        numero = 0; 
    } 
      else{
        validar = numero
      }
    }
    return numero
    }
 }
var m = new MyMath();
m.random(1,100);
 
