
export function niOuiNiNon(sentence){

    if (!(sentence.indexOf(" yes ") === -1)){
        return "NOK"} 
    else if (!(sentence.indexOf(" no ") === -1)){
        return "NOK"}
    else if ((sentence.indexOf("no ") === 1)){
        return "NOK"}
    else if ((sentence.indexOf("yes ") === 1)){
        return "NOK"}
    else{
        return "OK"}
}