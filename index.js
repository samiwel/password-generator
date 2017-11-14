const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "±!@£$%^&*()_+=-§[]{};'|?><~`";

const defaultOptions = {
  useLetters: true,
  useNumbers: true,
  useSymbols: true,
  useBothCases: true
};

function generatePassword(length, options=defaultOptions) {

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

module.exports = generatePassword;
