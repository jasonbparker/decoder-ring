// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || !shift || shift === 0) return false;
    let shiftVal = encode ? shift * 1 : shift * -1;
    let splits = input.toLowerCase().split("");
    console.log(splits);
    let numbs = splits.map((letter) => {
      return letter.charCodeAt();
    });
    let shifts = numbs.map((num) => {
      if (num <= 122 && num >= 97) {
        let newNum = num + shiftVal;
        if (newNum < 97) return String.fromCharCode(123 - (97 - newNum));
        if (newNum > 122) return String.fromCharCode(96 + (newNum - 122));
        return String.fromCharCode(newNum);
      }
      return String.fromCharCode(num);
    });
    return shifts.join("").toLowerCase();
  }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
