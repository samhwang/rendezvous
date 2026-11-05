import { describe, expect, it } from 'vitest';

import { temperatureDrop } from '.';

describe('Temperature drop', () => {
  it.each<[number[], number, number[]]>([
    [[70, 68, 72, 60, 65, 55], 5, [3, 2, 1, 2, 1, 0]],
    [[50, 49, 48], 5, [0, 0, 0]],
    [[40, 30, 45, 20], 10, [1, 2, 1, 0]],
  ])('Should output the correct temp drop', (input, threshold, expected) => {
    expect(temperatureDrop(input, threshold)).toEqual(expected);
  });
});
