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
    return numero
}
// exponentes-----------------------------------------------------
 this.pow = function(numero,exponente){
      var numero
     for(i = 0; i < exponente; i++){
        numero * exponente;
     }
     return numero
    }
 }

var m = new MiMath(1,5,8,0,4,55,4,65,6,3,698,54,87,4,5,2,1,5,45,768,45,5,465,132,4);
m.min()
m.max()
for(i = 0; i <100; i++){
 console.log(m.random(0,100)); 
}