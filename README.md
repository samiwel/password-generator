# password-generator

A library for generating passwords of varying complexity with arbitrary length.

## How to use

```
import generatePassword from "password-generator";

const options = {
  useLetters: true,
  useBothCases: true,
  useNumbers: true,
  useSymbols: true
};

const length = 12;

const password = generatePassword(length, options);

console.log(password);

```

## Licence
[MIT](LICENSE.MD)
