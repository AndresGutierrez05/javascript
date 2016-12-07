function MiString(str){
  var arreglo = [];
  this.length = 0;
    for(var i = 0 ; true; i++){
      if(str[i] === undefined){
           break;
        }
        arreglo[i] = str[i];
        this[this.length] = arreglo[i];
        this.length++;        
    }

  this.toString = function(){
      return str;
  };
  this.valueOf = function(){
      return this.toString();
  };

  this.reverse = function(){
    var x = this.length -1;
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
     //var val =  pos === Number ? arreglo[pos] : arreglo[0]
    return  arreglo[pos];
}
  this.slice = function(pos1,pos2){
    var parte = [];
    for(var i = 0; i < this.length; i++){
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
     for(var i = 0; i < this.length; i++){
      if(str[i] === split){
          division.push(_temp);
          _temp = "";
         }
      else
        {
          _temp += str[i]  
        }
      if(i == (this.length - 1)){
         division.push(_temp);
        }
      }  
       return division;
 }

} 
var s = new MiString("hola a todos");
console.log(s.length);
console.log(s[11]);
console.log(s.reverse());
console.log(s.toString());
console.log(s.charAt("0"));
console.log(s.concat(" : soy andrés"));
console.log(s.slice(1,11));
console.log(s.split("a"));