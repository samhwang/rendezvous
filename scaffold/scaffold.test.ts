import { describe, expect, it } from 'vitest';
import { isValidDate } from './scaffold';

describe('Is Valid Date', () => {
  it.each<string>([
    '01012023',
    '01022023',
    '01022024',
    '01032023',
    '01042023',
    '01052023',
    '01062023',
    '01072023',
    '01082023',
    '01092023',
    '01102023',
    '01112023',
    '01122023',
  ])('should parse date in the format ddmmyyyy %s', (input) => {
    expect(() => isValidDate(input)).not.toThrow();
  });

  it('should throw error when date is not in the format ddmmyyyy', () => {
    const input = '0101';
    expect(() => isValidDate(input)).toThrow();
  });

  it('should throw error when month > 12', () => {
    const input = '01132023';
    expect(() => isValidDate(input)).toThrow();
  });

  it.each<string>([
    '32012023',
    '32032023',
    '32052023',
    '32072023',
    '32082023',
    '32102023',
    '32122023',
    '29022023',
    '30022024',
    '31042023',
    '31062023',
    '31092023',
    '31112023',
  ])('should throw error for invalid days in a month for %s', (input) => {
    expect(() => isValidDate(input)).toThrow();
  });
});
