import { describe, expect, it } from 'vitest';
import { wrap } from './index';

describe('Word Wrapping', () => {
  it('should cut the text correctly at 10 chars', () => {
    const input = 'Hello, world! I am hungry.';
    const length = 10;
    const expected = 'Hello, wo-\nrld! I am\nhungry.';
    expect(wrap(input, length)).toBe(expected);
  });

  it('should not make new lines start with non-alphanumeric char', () => {});
});
