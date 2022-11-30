console.log('Your external JavaScript file is linked!');
// Assignment code
const generateBtn = document.querySelector('#generate');
// const copyBtn = document.querySelector("#copy");
const select = document.querySelector('#criteria');

// Object: possible password values
const passKeys = {
   uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   lowercase: 'abcdefghijklmnopqrstuvwxyz',
   number: '0123456789',
   symbol: '!@#$%&*()<>{}[]',
};

// Generate password definition
function generatePassword() {
   // Prompt for password length
   const lengthConfirm = window.prompt(
      'How many characters should your password include? Please enter a number between 8 and 128. Okay to continue.',
   );
   const upperConfirm = window.confirm(
      'Include uppercase letters? Cancel to continue without uppercase.',
   );
   const lowerConfirm = window.confirm(
      'Include lowercase letters? Cancel to continue without lowercase.',
   );
   const numberConfirm = window.confirm(
      'Include numbers? Cancel to continue without numbers.',
   );
   const symbolConfirm = window.confirm(
      'Include special characters? Cancel to continue without special characters.',
   );

   // Confirm all types of char
   if (lengthConfirm >= 8 && lengthConfirm <= 128) {
      upperConfirm;
      lowerConfirm;
      numberConfirm;
      symbolConfirm;
   } else {
      //check edge cases
      alert('Password must be 8-128 characters long. Please try again.');
   }

   // Build master charset from selected types // access object keys
   let chosenValues = '';

   if (upperConfirm) {
      chosenValues += passKeys.uppercase;
   }
   if (lowerConfirm) {
      chosenValues += passKeys.lowercase;
   }
   if (numberConfirm) {
      chosenValues += passKeys.number;
   }
   if (symbolConfirm) {
      chosenValues += passKeys.symbol;
   }
   if (
      upperConfirm != true &&
      lowerConfirm != true &&
      numberConfirm != true &&
      symbolConfirm != true
   ) {
      alert('Select any password option and specify the length'); //check edge cases
   }
   console.log(chosenValues);

   // Random generator function
   let generatedPassword = '';

   for (let x = 0; x < lengthConfirm; x++) {
      generatedPassword +=
         chosenValues[Math.floor(Math.random() * chosenValues.length - 1)];
   }
   console.log(generatedPassword);
   return generatedPassword;
}

// Write password to the #password input
function writePassword() {
   const password = generatePassword();
   const passwordText = document.querySelector('#password');

   passwordText.value = password;
}
// Add event listener to select criteria button
select.addEventListener('click', writePassword());

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
