// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  expect(repeat(["woo", 2])).toBe("woowoo");
  expect(repeat(["woo", 2, 5])).toBe(undefined);
  expect(repeat(["foo", 0])).toBe("");
  expect(repeat([5, 3])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
