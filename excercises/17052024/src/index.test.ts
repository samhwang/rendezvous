import { describe, expect, it } from 'vitest';
import { maxProduct } from './index';

describe('Max Product function', () => {
  describe('Invalid inputs', () => {
    it('Should reject input that has less than 3 numbers', () => {
      const input = [1, 2];
      expect(() => maxProduct(input)).toThrowError('Input should have at least 3 numbers');
    });

    it('Should reject if it has non-integer values', () => {
      const input = [1, 2, 3.5, 'aaa'];
      expect(() => maxProduct(input)).toThrowError('Input should have only integers');
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
