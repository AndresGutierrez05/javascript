function MiString(str){
  var arreglo = [];
  this.longitud= (function(){
    for(var i = 0 ; true; i++){
        if(str[i] === undefined){
           break;
        }
    }
    return i;
  })();

  this.toString = function(){
      return str;
  };

  this.reverse = function(){
    var x = this.longitud -1;
    var reversa = "";
    do{
      reversa = reversa + this.charAt(x);
      x--
    }while(x>=0);
    return reversa
  }

  this.concat = function(con){
    var result = str + ' ' + con;
    return result
  };

  this.charAt = function(pos){
   
    for(var i = 0; i < this.longitud; i++){
      arreglo[i] = str[i];
        }
    return arreglo[pos];
}
  this.slice = function(pos1,pos2){
    var parte = [];
    for(var i = 0; i < this.longitud; i++){
      arreglo[i]  = str[i];
    }
    for(var i = pos1; i < pos2; i++){
      parte[i] = arreglo[pos1] = str[i];
    }
    return parte.join("");
  }
  this.split = function(split){
    var division = [];
    var _temp = "";
     for(var i = 0; i < this.longitud; i++){
      if(str[i] === split){
          division.push(_temp);
          _temp = "";
         }
      else
        {
          _temp += str[i]  
        }
      if(i == (this.longitud - 1)){
         division.push(_temp);
        }
      }  
       return division;
 }
} 
var s = new MiString("hola a todos");
s.split("a");
