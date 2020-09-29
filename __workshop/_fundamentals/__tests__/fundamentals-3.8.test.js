// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  expect(reverseIt("hgfedcba")).toBe("abcdefgh");
  expect(reverseIt(123456)).toBe(undefined);
  expect(reverseIt("123456")).toBe("654321");
  expect(reverseIt(["abcdefgh"])).toBe(undefined);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
