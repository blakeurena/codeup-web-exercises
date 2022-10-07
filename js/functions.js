"use strict";
//(function(){
// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
    function sayHello(name) {
      return "Hello " + name
}
console.log(sayHello("blake"));
//  When called, the function should return a message that says hello to the passed in name.
//  Example
//  > sayHello("codeup") // returns "Hello, codeup!"

//  Store the result of the function call in a variable named 'helloMessage'.
let helloMessage = sayHello("jake");
//   console.log 'helloMessage' to check your work
console.log(helloMessage);
// console.log(sayHello("john"));

//   TODO:
//   Store your name as a string in a variable named 'myName', and pass that variable to the 'sayHello' function. You should see the same output in the console.
let myName = "blake";
console.log(sayHello (myName));

// Don't modify the following line, it generates a random number between 1 and 3
//  and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);


//   TODO:
//   Create a function called 'isTwo' that takes a number as a parameter.
function isTwo (number) {
    return number === 2
}
//   The function should return a boolean value based on whether or not the passed
//   number is the number 2.

//   Example
//   > isTwo(1) // returns false
//   > isTwo(2) // returns true
//   > isTwo(3) // returns false

//   Call the function 'isTwo' passing the variable 'random' as a argument.
console.log(isTwo(random));
//   console.log *outside of the function* to check your work (you should see a
//   different result everytime you refresh the page if you are using the random
//   number)


//   TODO:
//   Create a function named 'calculateTip' to calculate a tip on a bill at a
//   restaurant. The function should accept a tip percentage and the total of the
//   bill, and return the amount to tip
function calculateTip (totalBill, tipPercentage) {
    return totalBill * tipPercentage
}
console.log(calculateTip( 100, .15));
console.log(calculateTip( 25.50, .25));
console.log(calculateTip( 33.42, .15));

//   Examples:
//   > calculateTip(0.20, 20) // returns 4
//   > calculateTip(0.25, 25.50) // returns 6.375
//   > calculateTip(0.15, 33.42) // returns 5.013



//   TODO:
//   Use prompt and alert in combination with your calculateTip function to
//   prompt the user for the bill total and a percentage they would like to tip,
//   then display the dollar amount they should tip
let tipPercentage = prompt("How much would you like to tip?");
let totalBill = prompt("How much was your total bill?");

alert("Your total bill is " + calculateTip(totalBill, tipPercentage) + " before tax.");



//   TODO:
//   Create a function named `applyDiscount`. This function should accept a price
//   (before a discount is applied), and a discount percentage (a number between 0
//   and 1). It should return the result of applying the discount to the original
//   price.
function applyDiscount(itemPrice, itemDiscount) {
 return    itemPrice * itemDiscount

}
console.log(applyDiscount(1.00,0.1));
console.log(applyDiscount(5.00,0.5));
console.log(applyDiscount(45.99,40.4712));

//   Example:
//   > var originalPrice = 100;
//   > var discountPercent = .2; // 20%
//   > applyDiscount(originalPrice, discountPercent) // 80
//   > applyDiscount(45.99, 0.12) // 40.4712
// */
//)};

