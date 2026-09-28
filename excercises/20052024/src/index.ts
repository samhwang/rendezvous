const SYMBOLS = {
  EXCLAMATION: '!',
  INVERTED_EXCLAMATION: '¡',
  QUESTION: '?',
  INVERTED_QUESTION: '¿',
} as const;

export function fixInvertedPunc(input: string): string {
  if (!input.includes(SYMBOLS.EXCLAMATION) && !input.includes(SYMBOLS.QUESTION)) {
    return input;
  }

  const words = input.split(' ');
  let startOfSentenceIndex = 0;
  words.map((word, index) => {
    if (index === startOfSentenceIndex) {
      return word;
    }

    if (!word.endsWith(SYMBOLS.EXCLAMATION) && !word.endsWith(SYMBOLS.QUESTION)) {
      return word;
    }

    if (word.endsWith(SYMBOLS.EXCLAMATION)) {
      words[startOfSentenceIndex] = `${SYMBOLS.INVERTED_EXCLAMATION}${words[startOfSentenceIndex]}`;
      startOfSentenceIndex = index + 1;
      return word;
    }

    words[startOfSentenceIndex] = `${SYMBOLS.INVERTED_QUESTION}${words[startOfSentenceIndex]}`;
    startOfSentenceIndex = index + 1;
    return word;
  });

  return words.join(' ');
}
