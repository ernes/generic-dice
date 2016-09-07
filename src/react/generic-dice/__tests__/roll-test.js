/* global describe jest it expect beforeEach afterEach jasmine */
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');
jest.unmock('../roll');

describe('GenericDice roll function', () => {
  let rollingEvent;

  beforeEach(() => {
    rollingEvent = new CustomEvent('roll');
  });

  afterEach(() => {
    window.document.removeEventListener('roll', rollingEvent);
  });

  it('changes the state when it is called via triggering the roll event', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    window.document.dispatchEvent(rollingEvent);

    expect(component.state.rolling).toBe(true);
  });

  it('changes the state when it is called via triggering the roll event', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    window.document.dispatchEvent(rollingEvent);

    expect(component.state.animation).toBe('thrown');
  });
});
