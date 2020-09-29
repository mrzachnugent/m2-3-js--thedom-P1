// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  expect(longestWord(45154154)).toBe(undefined);
  expect(longestWord("a bbrrrr ccc dddd e ff ggg")).toBe("bbrrrr");
  expect(
    longestWord([
      "a bb ccc dddd e ff ggg",
      "supercalifragilisticespialidocious",
    ])
  ).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
