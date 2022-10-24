import { sum } from "./math";
import { sub } from "./math";


test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 5)).toBe(6);
  expect(sum(5, 1)).toBe(6);

});


test("sub of 1 - 2 equals 3", () => {
  expect(sub(1, 2)).toBe(-1);
  expect(sub(1, 5)).toBe(-4);
  expect(sub(5, 1)).toBe(4);

});