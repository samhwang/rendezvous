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
