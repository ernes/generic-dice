/* global describe jest it expect beforeEach afterEach jasmine spyOn */
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import GenericDice from '../generic-dice';

jest.useFakeTimers();

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

  it('has found event and checked its timeout length', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    window.document.dispatchEvent(rollingEvent);

    // Which event number is this?
    // It changes depending on other unit tests (I know, it's wrong').
    expect(setTimeout.mock.calls.length).toBe(3);

    // The 3rd event is on index 2.
    expect(setTimeout.mock.calls[2][1]).toBe(700);
  });

  it('has called resetAnimation when the timeout has elapsed');

});
