// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  expect(getLetterAtIndex(6, 2)).toBe(undefined);
  expect(getLetterAtIndex("hello", 5)).toBe(undefined);
  expect(getLetterAtIndex("purple", 3)).toBe("p");
  expect(getLetterAtIndex("purple", 10)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
