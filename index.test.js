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
    for(let len of [8, 16, 32, 64, 128, 256, 512, 1024]) {
      expect(generatePassword(len)).toHaveLength(len);
    }
  });

  it("should yield a different value each time", () => {
    expect(generatePassword(9)).not.toEqual(generatePassword(9, options));
  });

});
