import { describe, expect, it } from 'vitest';
import { fixInvertedPunc } from './index';

describe('Fix inverted Punctuations', () => {
  it('Should output correctly for "Feliz cumpleaños!"', () => {
    expect(fixInvertedPunc('Feliz cumpleaños!')).toBe('¡Feliz cumpleaños!');
  });

  it('Should output correctly for "Ella ya se graduó de la universidad? ¡No!"', () => {
    expect(fixInvertedPunc('Ella ya se graduó de la universidad? ¡No!')).toBe('¿Ella ya se graduó de la universidad? ¡No!');
  });

  it('Should output correctly for "Test string"', () => {
    expect(fixInvertedPunc('Test string')).toBe('Test string');
  });
});
