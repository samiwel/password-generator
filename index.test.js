const generatePassword = require("./index");

const createOptions = (useLetters=true,
  useNumbers=true,
  useSymbols=true,
  useBothCases=true) => {
  return {
    useLetters,
    useBothCases,
    useNumbers,
    useSymbols
  }
}

describe("password-generator", () => {

  let options;

  beforeEach(() => {
    options = createOptions();
  });

  it("should generate password of length", () => {
    expect(generatePassword(9, options)).toHaveLength(9);
  });

  it("should yield a different value each time", () => {
    expect(generatePassword(9, options)).not.toEqual(generatePassword(9, options));
  });

});
