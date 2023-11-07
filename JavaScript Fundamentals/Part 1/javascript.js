let hello = "World";
alert(hello)
console.log(hello)

const Birthday_Date = "Sep 16 2004";
let birthday = Birthday_Date;
alert(birthday);

//Variable Tasks
let name = 'John';
let admin = name;
alert(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'William';

const BIRTHDAY = '16.09.2004';
//Hard-coded, we knew it prior to execution
const age = someCode(BIRTHDAY);
//even though it doesn't change through code execution, the value changes based on the year you ran the code. It is evaluated in run-time, during the execution.


//Basic operators, maths Tasks
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
a = 2
b = 2


let a = 2;

let x = 1 + (a *= 2); //a=4 x=5


"" + 1 + 0 //"10"
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //""9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //"  -9  5"
"  -9  " - 5 //-14
null + 1 // 1
undefined + 1// NaN
" \t \n" - 2 // -2



let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

//using a unary plus convert a string into a number, it works similar to Number()
