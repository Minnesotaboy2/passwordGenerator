// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyz"
var sym = "!@#$%^&*'-_=+|;:?.,`~<>/"
var num = "0123456789"

// add checkbox for number y/n
// add checkbox for symbol y/n

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
