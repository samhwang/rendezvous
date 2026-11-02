import { describe, it, expect } from 'vitest';

import { elapsedMinutes } from './index';

describe('Elapsed minute tests', () => {
  it.each<[string[], number]>([
    [['00:50', '01:10', '01:50', '01:10', '02:10'], 140],
    [['01:55', '01:05', '01:25', '01:40'], 45],
  ])('Should calculate the elapsed minutes correctly', (input, output) => {
    expect(elapsedMinutes(input)).toEqual(output);
  });
});
