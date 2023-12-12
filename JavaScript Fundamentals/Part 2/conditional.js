switch () {
  case

  break;

  default
  break
}

//Conditional operator ‘?’
Before
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

After
let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;


Multiple ‘?’
let age = prompt('age?', 18);

let result = condition ? value1 :
  condition ? value2 :
  condition ? value3 :
  value4;

alert( result );




//TASKS
Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

Yes, it will.

Any string except an empty one (and "0" is not empty) becomes true in the logical context.


Show the sign

Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.

let num = prompt("say any number");

let number = (num > 0) ? 1 :
  (num < 0) ? -1 :
  (num === 0) ? 0 :
  NaN;

alert(number);


Rewrite 'if' into '?'
importance: 5

Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result = (a + b < 4) ? "Below" : "Over";
Rewrite 'if..else' into '?'
importance: 5

Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message = (login == 'Employee') ? "Hello" :
  (login == 'Director') ? 'Greeting' :
  (login == '') ? 'No login' :
  '';
