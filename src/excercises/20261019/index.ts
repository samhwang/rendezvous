const SYMBOLS = Object.freeze({
  DELETE: '#',
  COPY: '~',
});

export function ghostwriter(input: string): string {
  return input.split('').reduce((finalText, currentChar) => {
    if (currentChar === SYMBOLS.DELETE) {
      return finalText.slice(0, finalText.length - 1);
    }

    if (currentChar === SYMBOLS.COPY) {
      if (finalText === '') {
        return '';
      }

      const finalChar = finalText.charAt(finalText.length - 1);
      return `${finalText}${finalChar}`;
    }

    return `${finalText}${currentChar}`;
  }, '');
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe('Ghostwriter', () => {
    it.each<[string, string]>([
      ['ghost', 'ghost'],
      ['a#~b', 'b'],
      ['ab~c#', 'abb'],
      ['BBB##O~', 'BOO'],
    ])('Should return correct ghost writer output', (input, output) => {
      expect(ghostwriter(input)).toEqual(output);
    });
  });
}
