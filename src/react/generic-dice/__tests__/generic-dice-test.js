/* global describe jest it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('is co-existent with a window object to represent the DOM', () => {
    expect(window).toBeDefined();
  });

  it('renders a snapshot', () => {
    const component = renderer.create(<GenericDice />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a snapshot that is not null', () => {
    const component = renderer.create(<GenericDice />);
    const tree = component.toJSON();

    expect(tree).not.toEqual(null);
  });
});
