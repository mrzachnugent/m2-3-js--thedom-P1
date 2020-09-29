// We import (require) the function that we want to test.
const firstLetter = require("../fundamentals-3.1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", function () {
  expect(firstLetter("max")).toBe("m");
  expect(firstLetter("")).toBe(undefined);
  expect(firstLetter(25)).toBe(undefined);
  expect(firstLetter(" pump")).toBe(" ");
  expect(firstLetter("JavaScript")).toBe("J");
  // add more tests here...
});

// Run your test by typing yarn test fundamentals-3.1 in the terminal.

// More info on jest expect: https://jestjs.io/docs/en/expect
