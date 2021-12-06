// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const result = [];
    const polyArr = [
      [],
      [, "A", "B", "C", "D", "E"],
      [, "F", "G", "H", "I/J", "K"],
      [, "L", "M", "N", "O", "P"],
      [, "Q", "R", "S", "T", "U"],
      [, "V", "W", "X", "Y", "Z"],
    ];
    const valueLibrary = {
      11: "A",
      21: "B",
      31: "C",
      41: "D",
      51: "E",
      12: "F",
      22: "G",
      32: "H",
      42: "I/J",
      52: "K",
      13: "L",
      23: "M",
      33: "N",
      43: "O",
      53: "P",
      14: "Q",
      24: "R",
      34: "S",
      44: "T",
      54: "U",
      15: "V",
      25: "W",
      35: "X",
      45: "Y",
      55: "Z",
    };
    if (!encode) {
      for (let word of input.split(" ")) {
        if (word.length % 2 === 1) return false;
      }
      let splits = input.split(" ");
      let splitArr = splits.map((words) => words.match(/.{1,2}/g));
      splitArr.forEach((nums, i) => {
        if (i > 0) {
          result.push(" ");
        }
        nums.forEach((num) => {
          result.push(valueLibrary[num]);
        });
      });
    } else {
      let splits = input.toLowerCase().split("");
      splits.map((char) => {
        if (char === " ") result.push(char);
        if (char === "i" || char === "j") {
          char = "I/J";
        }
        polyArr.map((row, i) => {
          row.map((candidate, j) => {
            if (char.toUpperCase() === candidate.toUpperCase()) {
              let val1 = j.toString();
              let val2 = i.toString();
              result.push(val1.concat(val2));
            }
          });
        });
      });
    }
    return result.join("").toLowerCase();
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
