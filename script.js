// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// created function to generate password
function generatePassword() {

  // Moved all variables top of file:

  // created lengthAsk and set it to true. The computer will prompt an error if it becomes false. It only becomes false if it has to run the loop again, meaning user entered the incorrect length.
  var lengthAsk = true
  // set charset to an empty string
  var charset = "";
  // set password to an empty string
  var password = "";

  // created while loop to make sure the password meets all criteria 

  do {

    if (lengthAsk) {
      var length = prompt("How long would you like your password to be? (Must be between 8-128 characters.)");
      lengthAsk = false

    } else {
      var length = prompt("Invalid - Please try again! Must be between 8-128 characters.")

    }

    length = parseInt(length)

  }
  // length less than 9 OR length greated than 128 - cannot fix bug where user hits cancel :( 
  while (length < 8 || length > 128)

  // created the prompts (true or false) for each option - yes includes the character choices, cancel (or no) does not include the choice.
  if (confirm("Would you like to include an uppercase letter?")) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (confirm("Would you like to include a lowercase letter?")) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }

  if (confirm("Would you like to include a number?")) {
    charset += "0123456789"
  }

  if (confirm("Would you like to include a special character?")) {
    charset += "!@#$%^&*()_+ ~`|}{[]\:;?><,./-="
  }

  // created a for statement for the computer to cycle through everything and generate the password combinations.
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;

}



// Old code
// ~~~
// // went back to make it all a button instead of an instant prompt
// // gotta listen for the event
// // and turn the whole thing into a function so it won't start immediately
// // here is the function for the button:
// var generateBtn = document.querySelector("#generate");

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // and here is the listener:
//   generateBtn.addEventListener("click", writePassword);


// // and here is the actual function -- all previous work now contained within this function
// function generatePassword() {

// // went back to create this variable for what characters are allowed.
// var allowedChars = " "
// // went back again to make these their own variables
// // so that I can guarantee one of each type in the final passowrd
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var numericChar = "0123456789"
// var specialChar = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
// // which means we need a running variable to ++ every time they say yes
// var characterTypeTotal = 0; 

// // but we also gotta know if they said yes to each question, so
// var lowerYes = false 
// var upperYes = false
// var numericYes = false
// var specialYes = false

// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
//   // so let's setup the prompts to ask the user for what criteria they want
//   // one at a time

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// var passwordLongness = prompt("How long of a password? Please enter a number between 8 and 128.");
// // WHEN I answer each prompt
// // THEN my input should be validated 
// alert("You have entered " + passwordLongness + " characters.")
// // gotta parse the integer or computer will hate it because its a string
// passwordLongness = parseInt(passwordLongness)
// // test to make sure it works
// console.log(passwordLongness)


// // THEN I choose lowercase, 
// if (confirm("Lower case letters ok?")) {
//   allowedChars += "abcdefghijklmnopqrstuvwxyz"
//   // WHEN I answer each prompt THEN my input should be validated
//     alert("You have selected Yes.");
//     // increase our running count of character types and set the matching variable to true
//     characterTypeTotal++;
//     var lowerYes = true;
// }
//   else {
//   alert("You have selected No.")
// }

// // uppercase, 
// if (confirm ("Uppercase letters ok?")) {
//   allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   // THEN my input should be validated
//   alert("Uppercase Letters Allowed")
//   characterTypeTotal++;
//   var upperYes = true;
// } else {
//   alert("you don't like upper case letters")
// }

// // numeric, 
// if (confirm ("Would you like to include numbers 0-9?")) {
//   allowedChars += "0123456789"
//   alert("You have selected Yes.")
//   characterTypeTotal++;
//   var numericYes = true;
// } else {
//   alert("You have selected No.")
// }

// // and/or special characters
// if (confirm ("Special characters ok?")) {
// // I copied these from the linked website by hand like a tool lol
//   allowedChars += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//   alert("You have selected Yes.")
//   characterTypeTotal++;
//   var specialYes = true
// } else { 
//   alert("You have selected No.")
// }

// // print it to see if it works
// console.log(allowedChars)

// var newPassword = " "
// for (var i = 0, n = allowedChars.length; i < passwordLongness; ++i) {
//     newPassword += allowedChars.charAt(Math.floor(Math.random() * n));
//   }

// // print it
// console.log(newPassword)  
// return newPassword
// }