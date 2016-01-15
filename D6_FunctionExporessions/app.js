greet();

//function statement
function greet() {
  console.log('hi');
}

//function expression
var annoymousGreet = function (){
  console.log('hi');
};

annoymousGreet();

//first class function example
function log(a) {
  a();
}


log(function () {
  console.log('hi');
});
