//Arguments---------------------------------------------------------------------------

/*function test(){
    return arguments;
}
console.log(test(12,321,3,123123));


//Arguments con separador join --------------------------------------------------------
function test2(separador){
 var a = Array.prototype.slice.call(arguments, 1);
 return a.join(separador);
}
console.log(test2("%" ," blue "," red "," yellow "));


//Conviertiendo parametros de funcion en etiquetas ul y li html-------------------------
function test3(type){
   var resultado = "<" + type + "><li>";
   var argumentos = Array.prototype.slice.call(arguments, 1);
   resultado += argumentos.join("<li></li>");
   resultado += "</li></" + type + "l>";

   return resultado;
}
console.log(test3("ul","dos","tres"));

// ordena los parametros dados en el arguments y los muestra separados---------------------------
function f(){
   for(let letter of arguments){
      console.log(letter);
   }
}
f("a","b","c","d","e");
function whoCalled() {
   if (whoCalled.caller == null)
      console.log('I was called from the global scope.');
   else
      console.log(whoCalled.caller + ' called me!');
}
whoCalled()

//Arrow function------------------------------------------------------------------------
(function sumador(base){
    base = Number(base);
    for(var i = 1; i < arguments.length; i++){
     base += Number(arguments[i]);
    }
    return base;
})(5);;

//Diferencias entre Scope de una funcion Function y un Arrow function----------------------------------------
function Person(age) {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = age;

  setInterval(() => {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    
    console.log(age++);
  }, 1000);

}
Person(18);

function Person() {
  // Some choose `that` instead of `self`.                 // Choose one and be consistent.
  this.age = 0;

  setInterval(() =>{
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    this.age++;
    console.log(this.age);
  }, 1000);
}
Person();

var f = () => {
  'use strict'; 
  return this;
};
f(); // or the global object

var arguments = 42;
var arr = () => arguments;

arr(); 

function foo() {
  var f = (i) => arguments[0]+i;
  return f(2);
}

foo(1); 
var perro = {
  edad : 20,
  peso : 15,
  estatura : 50,
  promedio : function(){
      return this.peso * this.estatura;
  },
  vida : function(){
    return this.edad - 15 ;
  }
}

console.log(perro.promedio());
console.log(perro.vida());

var numeros = {
   a : 1
};

Object.defineProperty(numeros , "a" , {
   get: () => {
     console.log(this.a,typeof this.a, this);
     return this.a + 10;
   }
})
numeros.b;
function list(){
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3);
var treintaYsieteLiderando = list.bind(undefined , 37);
var list2 = treintaYsieteLiderando();
console.log(list2);
var list3 = treintaYsieteLiderando(1,2,3);
console.log(list3);
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  
// after 1 second, triggers the 'declare' method

var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

console.log(slice(arguments));

function producto(articulo,precio){
   this.articulo = articulo ;
   this.precio = precio;

   if(precio <=0){
      throw("Debes Poner un precio a el articulo " + this.articulo );
   }
}

function mueble(articulo,precio){
   producto.call(this, articulo, precio);
   this.categoria = 'Muebles';
}

var mueble1 = new mueble("cama",500000);
var mueble2 = new mueble("comedor",200000);
console.log(mueble1,mueble2);

var carros = [
  {marca : "mazda" , color : "amarillo", modelo : 2005},
  {marca : "renault" , color : "negro", modelo : 2009}
];

for(i = 0; i < carros.length; i++){
   (function(i){
      this.print = function(){
        console.log('la marca del carro es ' + this.marca + ' ,  su color y modelo es : ' + this.color + ' ' +this.modelo);
      }
      this.print();
   }).call(carros[i],i);
}

function gran(){
  var replicar = [this.persona , "es un gran" , this.trabajo].join(" ");
  console.log(replicar);
};

var i = {
  persona: "Andrés",
  trabajo : "programador"
};

gran.call(i);

console.log((function(a,b,d,e){  }).length);
console.log((function(a,b = 1,c,d,e,f,g){}).length);
console.log(gran.toString());


/* Declare the function 'myFunc' 
function myFunc(theObject) {
   theObject.brand = "Toyota";
 }
 
 /*
  * Declare variable 'mycar';
  * create and initialize a new Object;
  * assign reference to it to 'mycar'
  
 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 /* Logs 'Honda' 
 console.log(mycar.brand);

 /* Pass object reference to the function 
 myFunc(mycar);

 /*
  * Logs 'Toyota' as the value of the 'brand' property
  * of the object, as changed to by the function.
  
 console.log(mycar.brand);






function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5,3,7,1)); // shows 1,3,5,7

function sortArguments(...arguments) {
  var sortedArgs = arguments.sort(); 
  return sortedArgs; // this will never happen
}

// throws a TypeError: arguments.sort is not a function
console.log(sortArguments(8,7,3,5));



  (function getRgb(color){
    var hex = [];
    var rgb = []; 
    for(var i = 0; i < 2; i++){
      rgb[i] = hex.push(hex[i]);   
    };
    rgb.push(parseInt(color,16));
    rgb.join(","); 
    return 'rgb('+rgb+')';
  })("0000ff");*/

  function Rgb(color){
    var parte = [];
    var rgb = [];
     for(var i = 0 ; i < color.length; i++){
        color[i];
     }
     parte[0] = color[0] + color[1];
     parte[1] = color[2] + color[3];
     parte[2] = color[4] + color[5];

     rgb[0] = parseInt(parte[0],16);
     rgb[1] = parseInt(parte[1],16);
     rgb[2] = parseInt(parte[2],16);

     return "rgb("+rgb+")";
  };
  console.log(Rgb("00ffff"));
