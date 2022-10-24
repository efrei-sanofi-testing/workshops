export function niOuiNiNon(sentence) {
  const sentenceUppercase = sentence.toUpperCase();
  return !(
    sentenceUppercase.includes("OUI") || sentenceUppercase.includes("NON")
  );
}
