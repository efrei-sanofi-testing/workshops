import {petitBacScore} from "./petitBac";

test('Lettre B', () => {
    expect(petitBacScore("B", ["Bleu", "Blanc", "Bleu", "Rose", "Bleu"])).toStrictEqual([1, 2, 1, 0, 1])
})
test('Lettre A', () => {
    expect(petitBacScore("A", ["Abeille", "Alligator", "Alligator", "Hareng"])).toStrictEqual(Array(2, 1, 1, 0))
})

