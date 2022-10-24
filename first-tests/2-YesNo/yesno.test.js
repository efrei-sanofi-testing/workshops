import {niOuiNiNon} from './yesno.js'

test("yesno", () => {
    expect(niOuiNiNon("j'aime la tarte au citron")).toBe("OK")
    expect(niOuiNiNon("J'en ai entendu parler oui c'est vrai")).toBe("OK")
    expect(niOuiNiNon("ho yes i like it")).toBe("NOK")
    expect(niOuiNiNon("definitly no")).toBe("OK")
    expect(niOuiNiNon("this tast so good")).toBe("OK")
})