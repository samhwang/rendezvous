import { describe, expect, it } from 'vitest';

import { parseDate } from './scaffold';

describe('Parse Date', () => {
  it.each<string>([
    '20230101',
    '20230201',
    '20240201',
    '20230301',
    '20230401',
    '20230501',
    '20230601',
    '20230701',
    '20230801',
    '20230901',
    '20231001',
    '20231101',
    '20231201',
  ])('should parse date in the format yyyymmdd %s', (input) => {
    expect(() => parseDate(input)).not.toThrow();
  });

  it('should throw error when date is not in the format yyyymmdd', () => {
    const input = '0101';
    expect(() => parseDate(input)).toThrow();
  });

  it.each<number>([13, 0])('Should throw given invalid month %d', (input) => {
    expect(() => parseDate(`2023${input}01`)).toThrow();
  });

  it.each<string>([
    '20230132',
    '20230332',
    '20230532',
    '20230732',
    '20230832',
    '20231032',
    '20231232',
    '20230229',
    '20240230',
    '20230431',
    '20230631',
    '20230931',
    '20231131',
  ])('should throw error for invalid days in a month for %s', (input) => {
    expect(() => parseDate(input)).toThrow();
  });
});
