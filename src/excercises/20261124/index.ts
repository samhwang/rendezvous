export function canSeat(guests: string[], noSeatTogetherPairs: [string, string][]): boolean {
  if (noSeatTogetherPairs.length === 0) {
    return true;
  }

  return false;
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('Can seat together', () => {
    it.each<[string[], [string, string][], boolean]>([
      [
        ['Ang', 'Ben', 'Cam'],
        [
          ['Ang', 'Ben'],
          ['Ben', 'Cam'],
        ],
        true,
      ],
      [
        ['Ang', 'Ben', 'Cam'],
        [
          ['Ang', 'Ben'],
          ['Ben', 'Cam'],
          ['Cam', 'Ang'],
        ],
        false,
      ],
      [['Ang', 'Ben', 'Cam'], [], true],
    ])('Should solve the problem correctly', (guests, noSeatTogetherPairs, output) => {
      expect(canSeat(guests, noSeatTogetherPairs)).toEqual(output);
    });
  });
}
