export function yes_no(sentence) {
    let res = true
    if (sentence.toLowerCase().includes('yes') || sentence.toLowerCase().includes('no')) {
        res = false
    }
    return res
}