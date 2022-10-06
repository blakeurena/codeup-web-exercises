// "use strict";
// Function - a reusable block of code that performs a specific task, usually taking an input and producing an output.

// functions we've been exposed to
// console.log()
// prompt()
// alert()
// confirm()
// .startsWith()
// .endsWith
// Number() - constructor

// can accept a number of arguments.
// someFunctions(argument)

// Arguments are OPTIONAL
// prompt("What did you have for breakfast?")


//  Storing the return value of the prompt to our variable named littleMermaidDays.
// let littleMermaidDays = prompt("How many days did you rent Little Mermaid for?");
//
//  Storing the return value of parseInt to our variable named littleMermaidDays.
// let littleMermaidDays = parseInt(littleMermaid);
//
//  EXECUTING FUNCTIONS - DEFINITION VS EXECUTION
//
//  Definition is calling the name of the function without ().
// console.log(parseInt());
//  Performing the function when used with ().
// console.log(parseInt("11"));
//
//
//  Defining functions
//  Argument are values to a function when executing.
//  Parameters are placeholders for our function definition.
// function add(num, num2) {
//          return the output of num + num2
//         console.log("Hello in the function!");
//         return num - num2;
//         console.log("Finished the function execution");
//
// }
// console.log(add('5', '5'));
//
// let ten = add(num3, num27);
//
// console.log(ten);
//
//  Arrow Function Expression
// const addition = (num,num2 ) =>  num + num2;
//
// console.log(addition(num6, num24));
//
// console.log(add(add(num5, num26), add(num10, num27)));
//
// // Anonymous Functions
// let increment = function(x) {
//         return x + 1;
// };
//
// let two = increment(x1);




// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive() {
    return 5;
}

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(number) {
    return number;
}
console.log(isFive(5));
// how many inputs should the function have?
// what are the data types for the inputs?
// what is the data type of the output/return value?
//     one input
//    number
//     boolean
// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
//     function isShortWord(lessThan) {
//         return lessThan.length < 5;
//     }
//
// console.log(isShortWord())
// how many inputs?
// what data type for inputs?
// what is the return type?
//     one input
//     string
//     boolean
// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
//     function isSameLength(same,that) {
//         return same.length === that.length;


//  How many inputs?
//  What type of input?
//  What type of output?
//     two input
//     string
//     boolean

//
// // Make a function named isOdd(number)
// //https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even
//         function isOdd(n) {
//         return isEven(Number(n) +1);
//     }
// // Make a function named isEven(number)
// // https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even
//     function isEven(n) {
//         n= Number(n);
//         return n === 0 || !!(n && !(n%2));
//     }