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

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('Fix inverted Punctuations', () => {
    it('Should output correctly for "Feliz cumpleaños!"', () => {
      expect(fixInvertedPunc('Feliz cumpleaños!')).toBe('¡Feliz cumpleaños!');
    });

    it('Should output correctly for "Ella ya se graduó de la universidad? ¡No!"', () => {
      expect(fixInvertedPunc('Ella ya se graduó de la universidad? ¡No!')).toBe('¿Ella ya se graduó de la universidad? ¡No!');
    });

    it('Should output correctly for "Test string"', () => {
      expect(fixInvertedPunc('Test string')).toBe('Test string');
    });
  });
}
