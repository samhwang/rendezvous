function parseInput(input: unknown[]): number[] {
  if (input.length < 3) {
    throw new Error('Input should have at least 3 numbers');
  }

  if (input.some((n) => !Number.isInteger(n))) {
    throw new Error('Input should have only integers');
  }

  return input as number[];
}

export function maxProduct(input: unknown[]): number {
  const numbers = parseInput(input);
  const sorted = numbers.sort((a, b) => a - b);
  const length = sorted.length;
  const bottom3 = sorted[0] * sorted[1] * sorted[2];
  const top3 = sorted[length - 3] * sorted[length - 2] * sorted[length - 1];
  return Math.max(bottom3, top3);
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('Max Product function', () => {
    describe('Invalid inputs', () => {
      it('Should reject input that has less than 3 numbers', () => {
        const input = [1, 2];
        expect(() => maxProduct(input)).toThrow('Input should have at least 3 numbers');
      });

      it('Should reject if it has non-integer values', () => {
        const input = [1, 2, 3.5, 'aaa'];
        expect(() => maxProduct(input)).toThrow('Input should have only integers');
      });
    });

    describe('Valid inputs', () => {
      it.each<[number[], number]>([
        [[2, 4, 1, 3, -5, 6], 72],
        [[1, 2, 3, 4, 5], 60],
      ])('Should give the correct answer', (input, expected) => {
        expect(maxProduct(input)).toBe(expected);
      });
    });
  });
}
