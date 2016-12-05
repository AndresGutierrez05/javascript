function MiArreglo(){
  var arreglo = [];
  var argumentos = arguments;
  this.length = 0;
  for(var i in argumentos){
      arreglo[i] = argumentos[i];
      this[this.length] = argumentos[i];
      this.length++;
  }

   this.toString = function(){
      return  "" +arreglo;
   }

   this.push = function(push){
        arreglo[this.length] = push
        this.length++
           
      return  arreglo;
   }
   this.pop = function(){  
        var al =  arreglo[this.length -1];
        this.length --
        delete arreglo[this.length]

        return al;
   }

   this.join = function(car){
     var string = "";
     var x = 0;
    do{
      if(x === this.length -1){
        car = ""
      }
      string = string + arreglo[x] + car ;
      x++
    }while(x <= this.length -1);

    return string ;
   }

    this.sort = function(){
     // variable que toma el arreglo global en una copia
     var arreglocopia = arreglo.slice();
     // arreglo a vaciarse
     var arreglonuevo = arreglocopia.slice(); 
     // arreglo a llenar
     var orden = []; 
     // variable igual a longitud global en una copia
     var longitudcopia = this.length;
     // variable numero de longitud cambiante 
     var cambiante = longitudcopia
     var l = 0;
     do{
      //variable igual a el numero de la posicion inicial del arreglo
       var menor = arreglonuevo[0];
       //se crea variable posicion
       var pos;
       //for, para ir añadiendo el numero menor a el arreglo vacio orden
      for(i = 0; i < this.length; i++){
           //variable igual al valor de la posicion inicial de arreglonuevo
           var numero = arreglonuevo[i];
         //condicional , si la variable menor es mayor a la variable numero haga
         if(menor > numero){
            // variable posicion es igual a esta 
            pos = i;
            // camabie valor anterior de menor por el valor de numero
            menor = numero;
         }
       }
       //quitar la ultima posicion de la funcion this.longitud
      cambiante --
      //inserta en el arreglo orden el valor de la variable menor
      orden[l] = menor
      //incremento l para insertar mas alementos a medida de la validacion del menor
      l ++
      //elimina en el arreglo la posicion del numero que ya se usó
      arreglonuevo.splice(pos,1);
      //termine de hacer esto hasta que la cantidad de elementos del arreglo sea igual a la cantidad de elementos del array central
     }while(orden.length < this.length);
     
    //retorne el resultado final
    return orden
  }

 }
var a = new MiArreglo(58,954,687,560,86,832,588,355);


console.log(a.sort());
console.log(a.join("  /////  "));
console.log(a.push(520));
console.log(a.sort());
console.log(a.pop());