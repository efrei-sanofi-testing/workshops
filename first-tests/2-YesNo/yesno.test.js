import { niOuiNiNon } from "./yesno";

test("niOuiNiNon quand la phrase ne contient pas oui ou non", () => {
  expect(niOuiNiNon("bonjour")).toBe(true);
  expect(niOuiNiNon("coucou ca va")).toBe(true);
  expect(niOuiNiNon("ou no")).toBe(true);
  expect(niOuiNiNon("")).toBe(true);
});
test("niOuiNiNon quand la phrase contient oui ou non", () => {
  expect(niOuiNiNon("bonjour oui")).toBe(false);
  expect(niOuiNiNon("Non c'est vrai ?")).toBe(false);
  expect(niOuiNiNon("Oui?")).toBe(false);
  expect(niOuiNiNon("OUI!!!")).toBe(false);
});
