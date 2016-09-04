/* global describe jest it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('renders a snapshot', () => {
    const tree = renderer.create(<GenericDice />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a snapshot that is not null', () => {
    const tree = renderer.create(<GenericDice />).toJSON();
    expect(tree).not.toEqual(null);
  });

  it('is co-existent with a window object to represent the DOM', () => {
    expect(window).toBeDefined();
  });
});
