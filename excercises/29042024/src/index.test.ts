import { describe, expect, it } from 'vitest';
import { translateRightShift } from './index';

describe('translate right shift', () => {
  it('should give lol wowie', () => {
    const input = ';p; epeor';
    const expected = 'lol wowie';
    expect(translateRightShift(input)).toEqual(expected);
  });

  it('should give who am i', () => {
    const input = 'ejp s, o';
    const expected = 'who am i';
    expect(translateRightShift(input)).toEqual(expected);
  });
});
