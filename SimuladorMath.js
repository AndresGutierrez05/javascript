 function MiMath(){
   //numero menor ------------------------------------------------------
   var argumentos = arguments;
    this.min = function(){
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
  //numero al asar---------------------------------------------------------
  this.random = function(min,max){
   
      var random = new Date();
      var milli = random.getMilliseconds();
      var numero = 0;

      numero = Math.round((max-min)*(milli/1000)+min);
      return numero
    /*if(milli < min || milli > max){
      while(milli < min ||milli > max){
        milli = Math.floor(milli % max);
        if(milli < max || milli > min){
           numero = milli
        }
        if(milli < min){
           milli *= milli % min
           numero = milli
        }
      }
    }
    else{
      numero = milli
    }*/
    
}
// exponentes-----------------------------------------------------
this.pow = function(numero,exponente){
      var num = numero
     for(i = 1; i < exponente; i++){
         num *= numero;
     }
     return num
    }
 }

var m = new MiMath(1,5,8,4,4,55,4,65,6,3,55,4);
console.log(m.min());
console.log(m.max());
console.log(m.random(1,50));
console.log(m.pow(2,2));