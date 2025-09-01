import { expect, test } from "vitest";

//destructing means only importing specific functions from a module

// test("testing the add function", function() {
//     const result = add(2, 4);
//     const expectedResult = 6;
//     expect(result).toBe(expectedResult);
// });

import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app.js";

//1.

test("findMaxValue", function () {
  const result = findMaxValue([]);
  const expectedResult = null;

  expect(result).toBe(expectedResult);
});

//2.

test("factorial", function () {
  const result = factorial(0);
  const expectedResult = 1;

  expect(result).toBe(expectedResult);
});

//.3

test("areArraysEqual", function () {
  const result = areArraysEqual([1, 2], [1, 2, 3]);
  const expectedResult = false;

  expect(result).toBe(expectedResult);
});

//4.

test("toTitleCase", function () {
  const result = toTitleCase(12345);
  const expectedResult = "";

  expect(result).toBe(expectedResult);
});
