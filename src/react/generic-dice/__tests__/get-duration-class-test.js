/* global describe jest it expect */
import { getDurationClass } from '../get-duration-class';

jest.unmock('../get-duration-class');

describe('getDurationClass function', () => {
  it('exists.', () => {
    expect(getDurationClass).toBeDefined();
  });

  it('returns duration-7 when called without any parameter', () => {
    const result = getDurationClass();

    expect(result).toBe('duration-7');
  });

  it('returns duration-5 when called with 500 as parameter', () => {
    const result = getDurationClass(500);

    expect(result).toBe('duration-5');
  });

  it('returns duration-6 when called with 600 as parameter', () => {
    const result = getDurationClass(600);

    expect(result).toBe('duration-6');
  });

  it('returns duration-8 when called with 800 as parameter', () => {
    const result = getDurationClass(800);

    expect(result).toBe('duration-8');
  });

  it('returns duration-8 when called with 900 as parameter', () => {
    const result = getDurationClass(900);

    expect(result).toBe('duration-9');
  });

  it('returns duration-7 when called with an unexpected value as parameter', () => {
    const result = getDurationClass(300);

    expect(result).toBe('duration-7');
  });

  it('returns duration-7 when called with an invalid value as parameter', () => {
    const result = getDurationClass('invalid value');

    expect(result).toBe('duration-7');
  });
});
