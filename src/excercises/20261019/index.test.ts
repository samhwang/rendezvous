import { describe, it, expect } from 'vitest';

import { ghostwriter } from '.';

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
