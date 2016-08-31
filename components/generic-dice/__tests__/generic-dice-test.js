/* global describe jest it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import GenericDice from '../generic-dice';

jest.mock('../generic-dice');

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('renders an element that is rolling by default.', () => {
    const component = renderer.create(
      <GenericDice />
    );
    const tree = component.toJSON();

    // todo: check the rolling property is indeed true.

    expect(tree).toMatchSnapshot();
  });
});
