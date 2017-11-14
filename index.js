const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "±!@£$%^&*()_+=-§[]{};'|?><~`";

const useLetters = true;
const useNumbers = true;
const useSymbols = true;
const useBothCases = true;

function validate(options) {
  if (options.length === 0) {
    throw new Error("At least one option needs to be set.")
  }
}

function generatePassword(length, options) {

  let dictionary = [];

  if (options.useLetters) {
    dictionary.push(alphabet);
    if (options.useBothCases) {
      dictionary.push(alphabet.toLowerCase());
    }
  }

  if (options.useNumbers) {
    dictionary.push(numbers);
  }

  if (options.useSymbols) {
    dictionary.push(symbols);
  }

  let password = "";

  for(let i=0; i<length; i++) {
    const dict = dictionary[Math.floor(Math.random() * dictionary.length)];
    password += dict[Math.floor(Math.random() * dict.length)];
  }

  return password;
}

let password = generatePassword(24, {
  useLetters,
  useNumbers,
  useSymbols,
  useBothCases
});

module.exports = generatePassword;
