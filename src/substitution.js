// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26)
      return false;
    alphabet = alphabet.toLowerCase();
    let alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let splitted = alphabet.split("");
    let splits = input.toLowerCase().split("");
    let result = [];
    splits.forEach((letters) => {
      if (letters == " ") {
        result.push(letters);
      }
      let indexes1 = alpha.indexOf(letters);
      let indexes2 = splitted.indexOf(letters);
      if (encode) {
        result.push(splitted[indexes1]);
      } else {
        result.push(alpha[indexes2]);
      }
    });
    return result.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
