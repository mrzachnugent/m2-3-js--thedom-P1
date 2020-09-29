// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  expect(calculator(["sub", 15, 10])).toBe(5);
  expect(calculator(["mul", 10, 15])).toBe(150);
  expect(calculator(["div", 10, 5])).toBe(2);
  expect(calculator(["multiply", 10, 5])).toBe(undefined);
  expect(calculator(["mul", "ten", 5])).toBe(undefined);
  expect(calculator(["div", "10", 5])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
