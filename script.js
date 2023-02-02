// Assignment code here
var numbers =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var finalpassword=[]
var characterpool=[]
function generatePassword(){

var passwordlength=prompt("how long do you want your password to be?")
if(passwordlength<8 || passwordlength>128) {
  alert("password must be between 8 and 128 characters")
  return;
}
var confirmspecial=confirm("would you like special charachters in your password?")
var confirmlower=confirm("would you like lowercase characters in your password?")
var confirmupper=confirm("would you like uppercase characters in your password?")
var confirmnumbers=confirm('would you like numbers in your password?')
if(confirmspecial===false && confirmlower===false && confirmnumbers===false && confirmupper===false){
alert("must choose atleast 1 charachter type")
return;
}
if(confirmspecial===true) {
  characterpool=characterpool.concat(special)
}

if(confirmnumbers===true) {
  characterpool=characterpool.concat(numbers)
}

if( confirmlower===true) {
  characterpool=characterpool.concat(lowerCase)
}

if (confirmupper===true) {
  characterpool=characterpool.concat(upperCase)
}
console.log (characterpool)

for (var i = 0; i<passwordlength; i++) {
  var getindex=Math.floor(Math.random ()*characterpool.length)
  var indexvalue=characterpool[getindex]
  finalpassword.push(indexvalue)
  console.log(finalpassword)
}
  return finalpassword.join("")
}