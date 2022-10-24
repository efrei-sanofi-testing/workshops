import { hangmanState, hangmanWord } from "./hangman";

test("hangmanState hangman is won", () => {
  expect(hangmanState("CaNard", "eraubdnc")).toBe("win");
  expect(hangmanState("Coucou", "cgozau")).toBe("win");
  expect(hangmanState("Coucou", "cguuuuuuuuuuuuozau")).toBe("win");
});

test("hangmanState hangman is lost", () => {
  expect(hangmanState("CaNard", "eztcuynklamjh")).toBe("lose");
  expect(hangmanState("CaNard", "zzzzzzzzzz")).toBe("lose");
});

test("hangmanState hangman is lost", () => {
  expect(hangmanState("CaNard", "eztcuynklamj")).toBe("in_progress");
  expect(hangmanState("CaNard", "")).toBe("in_progress");
});

test("hangmanWord none of letters have been guessed", () => {
  expect(hangmanWord("CaNard", "tuyh")).toBe("______");
  expect(hangmanWord("Bouche", "")).toBe("______");
});

test("hangmanWord some of the letters have been guessed", () => {
  expect(hangmanWord("CaNard", "tduyha")).toBe("_A_A_D");
  expect(hangmanWord("Bouche", "soducbh")).toBe("BOUCH_");
});

test("hangmanWord all of the letters have been guessed", () => {
  expect(hangmanWord("CaNard", "rtduycnha")).toBe("CANARD");
  expect(hangmanWord("Bouche", "sodeucbh")).toBe("BOUCHE");
});
