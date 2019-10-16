// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
const one = () => console.log("Function was invoked!");

one();
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const two = (param) => {return param;}

console.log (two("this is a string"))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const three = (param1, param2) => { return param1 + param2;}

console.log(three(1,2))



// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const four = (param1, param2) => { return param1 - param2;}

console.log(four(1,2))


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);