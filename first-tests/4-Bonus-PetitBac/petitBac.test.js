import { petitBacScore } from "./petitBac";

test("petitBacScore", () => {
  expect(petitBacScore("C", ["Coucou", "Coin", "Coucou", "Porte"])).toEqual([
    1, 2, 1, 0,
  ]);
});
