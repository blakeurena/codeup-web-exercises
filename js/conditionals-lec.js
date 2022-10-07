"use strict";
(function(){
// // TODO: 1. Create two string variables one for password and one for username.
//     let username = "blake";
//     let password = "password1";
//
// // TODO: 2. Create two more variables named userUsername and userPassword that prompt the user to enter in their credentials.
//    let userUsername = prompt("Enter username");
//    let userPassword = prompt("Enter password");
//
// // TODO: 3. Create an if statement and log to the console if the user enters the correct information.
//
// // TODO: 4. If the username matches the user, AND the password matches the user password, log to the console that they have successfully logged in. Otherwise, log to the console that the credentials are incorrect.
//     if (username === userUsername && password === userPassword) {
//         console.log("You have successfully logged in!")
//     } else{
//         console.log("Invalid credentials, try again.")
//    }
// Example:
// username = "jayman"
// password = "password1"


// Switch Statement


let menu =prompt("Please choose an item:\n1. cheeseburger \n2. chicken sandwich\n3. chilli cheese fries\n4. philly cheese steak");

switch(menu) {
    case'1':
        alert("The cheeseburger costs: $5.99")
        break;
    case'2':
        alert("The chicken sandwich comes with pickles and is $4.99");
        break;
    case'3':
        alert("The philly cheese steak has mushrooms and is $7.99");
        break;
    default:
        alert("Sorry, that item is not on the menu!")

}

})();