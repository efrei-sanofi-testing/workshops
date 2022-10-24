import {yes_no} from "./YesNo";


test("La phrase 'ceci est un test valide' ne doit pas contenir de yes ou non et renvoyer true", () => {
    expect(yes_no('ceci est un test')).toBe(true)
})

test("La phrase 'ceci est un test no valide' doit contenir de yes ou non et renvoyer false", () => {
    expect(yes_no('ceci est un no test')).toBe(false)
})

test("La phrase 'avec majuscule Yes' doit contenir de yes ou non et renvoyer false", () => {
    expect(yes_no('avec majuscule Yes')).toBe(false)
})
