/*
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number  */

let answer = parseInt(prompt("Pick a number to FizzBuzz: "));

function fizzBuzz(answer) {
  for (let i = 1; i <= answer; i++) {
    if (divBy3(i) && divBy5(i)) {
      console.log("FizzBuzz")
    } else if (divBy3(i)) {
      console.log("Fizz");
    } else if (divBy5(i)) {
      console.log("Buzz");
    } else {
      console.log(i)
    }
  }
}

function divBy3(num) {
  return num % 3 == 0
}

function divBy5(num) {
  return num % 5 == 0
}


