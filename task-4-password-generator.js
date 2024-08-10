const generatePassword = require('generate-password');

function createRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });
  console.log(`Generated password: ${password}`);
}

// Call the function to generate and log the password
createRandomPassword();
