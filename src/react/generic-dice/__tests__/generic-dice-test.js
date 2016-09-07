/* global describe jest it expect beforeEach afterEach */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

describe('GenericDice', () => {
  let component;

  afterEach(() => {
    const node = ReactDOM.findDOMNode(component);

    if (node && node.parentNode) {
      ReactDOM.unmountComponentAtNode(node.parentNode);
    }
  });

  it('exists.', () => {
    expect(GenericDice).toBeDefined();
  });

  it('can be rendered and found in the ReactDOM', () => {
    component = TestUtils.renderIntoDocument(<GenericDice />);
    const result = ReactDOM.findDOMNode(component);

    expect(result).toBeDefined();
  });

  it('can be set not to roll the first time it is loaded', () => {
    component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);

    expect(component.state.rolling).toBe(false);
  });
});
