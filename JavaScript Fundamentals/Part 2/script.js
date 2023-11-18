//Data types
//8 basic types of Data types in JavaScript
// - Number
  // - integer
  // - floats
  // - Infinity, -Infinity, NaN
// - BigInt
  //Numbers can't store larger integers without it breaking
  //A BigInt value is created by appending n to the end of an integer:
// - String
  //${…} for variable in `Hello, ${name}!`
// - Boolean(true or false)
// - "null"
  //“nothing”, “empty” or “value unknown”.
// - "undefined"
  //“value is not assigned”, variable declared not assigned
// - Objects and Symbols
// - typeof
  //Usually used as typeof x, but typeof(x) is also possible.
  //For null returns "object" – this is an error in the language, it’s not actually an object.


//Tasks
//let name = "Ilya";

// the expression is a number 1
//alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
//alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
// alert( `hello ${name}` ); // hello Ilya



//answer to prompt appear below buttong
function open() {
  const intro = prompt("Welcome to my cafe, what would you like to drink?");
  const welcome = document.querySelector("#welcome");
  welcome.textContent = `Here is your ${intro}, hope you enjoy it :)`;
}

//when button is click on, it run the open function
const button = document.querySelector("button");
button.addEventListener("click", open);

//Comparisons
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" // true
undefined == null // true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n" //false
