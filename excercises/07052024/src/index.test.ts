import { describe, expect, it } from 'vitest';
import { wrap } from './index';

describe('Word Wrapping', () => {
  it('should cut the text correctly at 10 chars', () => {
    const input = 'Hello, world! I am hungry.';
    const length = 10;
    const expected = 'Hello, wo-\nrld! I am\nhungry.';
    const output = wrap(input, length);
    expect(output).toBe(expected);
  });

  it('should not make new lines start with non-alphanumeric char', () => {
    const input = 'Hello, world! I am hungry.';
    const length = 5;
    const expected = 'Hell-\no, w-\norld!\nI am\nhung-\nry.';
    const output = wrap(input, length);
    expect(output).toBe(expected);
  });
});
