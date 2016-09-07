/* global describe jest it expect */

import requestAnimationFrame from 'raf.js';

import { roll } from '../roll';

jest.unmock('../roll');

// Use polyfill from raf.js if requestAnimationFrame is not available.
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = requestAnimationFrame;
}

describe('GenericDice', () => {
  it('co-exists with a window object to represent the DOM', () => {
    expect(window).toBeDefined();
  });

  it('co-exists with the requestAnimationFrame function from the window DOM object', () => {
    expect(window.requestAnimationFrame).toBeDefined();
  });
});
