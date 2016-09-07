/* global describe jest it expect */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

describe('GenericDice', () => {
  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('can be rendered and found in the ReactDOM', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice />);
    const result = ReactDOM.findDOMNode(component);

    expect(result).toBeDefined();
  });

  it('can be set not to roll the first time it is loaded', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    const state = component.state;

    expect(state.rolling).toBe(false);
  });
});
