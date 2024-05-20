const SYMBOLS = {
  EXCLAMATION: '!',
  INVERTED_EXCLAMATION: '¡',
  QUESTION: '?',
  INVERTED_QUESTION: '¿',
} as const;

export function fixInvertedPunc(input: string): string {
  return input;
}
