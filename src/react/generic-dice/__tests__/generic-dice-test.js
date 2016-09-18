/* global describe jest it expect beforeEach afterEach */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');

describe('GenericDice', () => {
  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<GenericDice />);
  });

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
    const result = ReactDOM.findDOMNode(component);

    expect(result).toBeDefined();
  });

  it('is set not to have any animation by default when it is mounted', () => {
    expect(component.state.animation).toBe('');
  });
});
