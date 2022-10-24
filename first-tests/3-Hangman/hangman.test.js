import {hangmanState} from './hangman.js';

test("hangman state", ()=> {
expect(hangmanState("CaNard", "eraubdnc")).toBe("win")
expect(hangmanState("CaNard", "eztcuynklamj")).toBe("in_progress")
expect(hangmanState("CaNard", "eztcuynklamjh")).toBe("lose")


});
