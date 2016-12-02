function MiArreglo(){
  var arreglo = [];
  for(let i in arguments){
      arreglo[i] = arguments[i];
  }
  this.length = 0;
 
   this.length = (function(){
     for(var i = 0 ; true; i++){
        if(arreglo[i] === undefined){
           break;
        }
        
    }
    return i;
   })();

   this.toString = function(){
      return  "" +arreglo;
   }

   this.push = function(push){
        arreglo[this.length] = push
        this.length++
           
      return  arreglo;
   }
   this.pop = function(){  
        this.length --
        delete arreglo[this.length]

        return arreglo[this.length];
   }

   this.join = function(car){
     var string = "";
     var x = 0;
    do{
      string = string + car + arreglo[x];
      x++
    }while(x <= this.length -1);

    return string ;
   }

    this.sort = function(){
     // variable que toma el arreglo global
     let arreglonuevo = arreglo;
     // array vacio 
     var orden = []; 
     // variable igual a longitud
     var cambiante = this.length;

     do{
      //variable igual a el numero de la posicion inicial del arreglo
       var menor = arreglonuevo[0];
       //se crea variable posicion
       var pos;
       //for para ir añadiendo el numero menor a el arreglo vacio insertar
      for(i = 0; i < this.length; i++){
           //variable igual al valor de la posicion inicial de arreglonuevo
           var numero = arreglonuevo[i];
         //condicional , si la variable menor es menor a la variable numero 
         if(menor < numero){
             // no cambie numero
             menor != numero;
         }
         else{
          // guardar la posicion de este numero en la variable pos
              pos = i;
          // si no es así, menor si es igual a numero , es decir "cambielo" 
              menor = numero;
         }
       }
       //quitar la ultima posicion de la funcion this.longitud
      this.length --
      //inserta en el arreglo orden el valor de la variable menor
      orden.push(menor);
      //elimina en el arreglo la posicion del numero que ya se usó
      arreglonuevo.splice(pos,1);

      //termine de hacer esto hasta que la cantidad de elementos del arreglo sea igual a la cantidad de elementos del array central
     }while(orden.length < cambiante);
     
    //retorne el resultado final
    return orden 
  }

 }
var a = new MiArreglo(58,954,687,560,86,832,588,355);
document.write(a.sort());