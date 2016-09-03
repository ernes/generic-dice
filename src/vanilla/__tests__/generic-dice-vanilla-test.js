/* global describe jest it expect */

import GenericDice from '../generic-dice-vanilla';

jest.unmock('../generic-dice-vanilla');

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('has a default face property set to 1', () => {
    const dice = new GenericDice();

    expect(dice.face).toBe(1);
  });

  it('has a default rolling property set to true', () => {
    const dice = new GenericDice();

    expect(dice.rolling).toBe(true);
  });

  it('has a default animation property set to an empty string', () => {
    const dice = new GenericDice();

    expect(dice.animation).toBe('');
  });
});
