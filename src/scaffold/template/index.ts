export function solver(_input: unknown): unknown {
  return;
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('{{PROBLEM}}', () => {
    it.each<[unknown, unknown]>([[0, 0]])('Should solve the problem correctly', (input, output) => {
      expect(solver(input)).toEqual(output);
    });
  });
}
