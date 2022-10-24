import {subtract, sum} from "./math";

// Test sum
test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum of 0 + 0 equals 0", () => {
  expect(sum(0, 0)).toBe(0);
});



// Test subtract
test("subtract of 10 - 100 need to be -90", () => {
  expect(subtract(10, 100)).toBe(-90);
})
test("subtract of 56 - 34 need to be 22", () => {
  expect(subtract(56, 34)).toBe(22);
})
