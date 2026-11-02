import { describe, expect, it } from 'vitest';

import { solver } from '.';

describe('{{PROBLEM}}', () => {
  it.each<[unknown, unknown]>([[0, 0]])('Should solve the problem correctly', (input, output) => {
    expect(solver(input)).toEqual(output);
  });
});
