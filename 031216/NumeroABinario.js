function DecimalABinario(num){
   var numero = num;
   var arreglo = []
   do
   {
	   var n = Math.floor(numero);
	   arreglo.push(n % 2); 
	   numero = numero / 2
   }while(numero > 1)

   return "el binario es : " + arreglo.reverse().join("");
}

function BinarioADecimal(bin){
   var string = bin;
   var decimal = 0;
   var binario = [];
   for(let i = 0; i < string.length ; i++){
      binario[i] = string[i];
   }
   var i = 0;
    for(var j = binario.length -1; j >= 0; j--){
      decimal += Math.pow(2,i) * binario[j] ;
      i++
     }
  
   return "el decimal es : " + decimal 
}



BinarioADecimal("1000110101101010101011100");