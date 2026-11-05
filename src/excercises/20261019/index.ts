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
