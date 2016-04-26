function createAdder(baseNumber) {
  return function (numberToAdd) {
     return baseNumber + numberToAdd;
  }  
}

var addTen = createAdder(10);
console.log(addTen(2)) //12
console.log(addTen(0)) //10


function greetMaker (name) {
  function greet(){
    console.log('Hello, ' + name + '!');
  }
  return greet;
}

greetMaker('Andrew')();

c