const LEFT_SHIFT_CHARS: Readonly<Record<string, string>> = {
  '`': '`',
  '1': '`',
  '2': '1',
  '3': '2',
  '4': '3',
  '5': '4',
  '6': '5',
  '7': '6',
  '8': '7',
  '9': '8',
  '0': '9',
  '-': '0',
  '=': '-',
  q: 'q',
  w: 'q',
  e: 'w',
  r: 'e',
  t: 'r',
  y: 't',
  u: 'y',
  i: 'u',
  o: 'i',
  p: 'o',
  '[': 'p',
  ']': '[',
  '\\': ']',
  a: 'a',
  s: 'a',
  d: 's',
  f: 'd',
  g: 'f',
  h: 'g',
  j: 'h',
  k: 'j',
  l: 'k',
  ';': 'l',
  "'": ';',
  z: 'z',
  x: 'z',
  c: 'x',
  v: 'c',
  b: 'v',
  n: 'b',
  m: 'n',
  ',': 'm',
  '.': ',',
  '/': '.',
};

export function translateRightShift(input: string): string {
  return input
    .split('')
    .map((char) => (char === ' ' ? char : LEFT_SHIFT_CHARS[char]))
    .join('');
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('translate right shift', () => {
    it('should give lol wowie', () => {
      const input = ';p; epeor';
      const expected = 'lol wowie';
      expect(translateRightShift(input)).toEqual(expected);
    });

    it('should give who am i', () => {
      const input = 'ejp s, o';
      const expected = 'who am i';
      expect(translateRightShift(input)).toEqual(expected);
    });
  });
}
