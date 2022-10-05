// console.log("Hello from external Javascript.")
//
// // 1. Use the alert function to show a message that says 'Welcome to my Website!'
// alert("Welcome to my Website");
//
// // 2. Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// let userResponse = prompt("What is your favorite color?")
// alert(userResponse + " is my favorite color too!");
// // 3. Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// // Movie Rentals
// let littleMermaid = prompt("How many days did you rent The Little Mermaid?");
//
// let brotherBear = prompt("How many days did you rent brotherBear?");
//
// let hercules = prompt("How many days did you rent hercules?");
//
// let pricePerDay = 3;
//
// let totalPrice = Number(littleMermaid+ brotherBear + hercules) * pricePerDay;
// alert(totalPrice);
//
// let googlePay = prompt("How much does Google pay you per hour?");
//
// let Amazon = prompt("How much does Amazon pay you per hour?");
//
// let Facebook = prompt("How much does Facebook pay you per hour?");
//
// let googleHours = prompt("How many hours did you work for Google?");
//
// let amazonHours = prompt("How many hours did you work for Amazon?");
//
// let facebookHours = prompt("How many hours did you work for Facebook?");
//
// let payment = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
//
// Class Schedule
// let isFull = confirm("Is the class full?");
// let hasConflict = confirm("Do you have a conflict with your schedule?");
// alert(!isfull && !hasConflict);

Discount Offer
let itemsBought = prompt("How many items did you buy?");
let offer = confirm("Has the offer expired?");
let isPremium = confirm("Are you a premium member>");

alert(parseFloat(itemsBought) > 2 || isPremium) && !offer);




