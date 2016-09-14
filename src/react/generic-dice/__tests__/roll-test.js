/* global describe jest it expect beforeEach afterEach jasmine spyOn */
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import * as C from '../constants';
import GenericDice from '../generic-dice';

jest.useFakeTimers();

jest.unmock('../generic-dice');
jest.unmock('../roll');

describe('GenericDice roll function', () => {
  let rollingEvent;

  afterEach(() => {
    window.document.removeEventListener('roll', rollingEvent);
  });

  it('changes the state when it is called via triggering the roll event', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    rollingEvent = new CustomEvent('roll');
    window.document.dispatchEvent(rollingEvent);

    expect(component.state.rolling).toBe(true);
  });

  it('changes the state when it is called via triggering the roll event', () => {
    const component = TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    rollingEvent = new CustomEvent('roll');
    window.document.dispatchEvent(rollingEvent);

    expect(component.state.animation).toBe('thrown');
  });

  it('has found its roll event and checked its default timeout length', () => {
    TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    rollingEvent = new CustomEvent('roll');
    window.document.dispatchEvent(rollingEvent);

    // Which setTimeout mock is this?
    // It changes depending on other unit tests (which is wrong).
    const currentMockSetTimeoutIndex = setTimeout.mock.calls.length - 1;

    expect(setTimeout.mock.calls[currentMockSetTimeoutIndex][1]).toBe(C.DURATION);
  });

  it('has found its roll event and checked the timeout length is custom', () => {
    TestUtils.renderIntoDocument(<GenericDice rolling={false} />);
    const duration = C.DURATION + 100;
    rollingEvent = new CustomEvent('roll', {
      detail: {
        duration,
      },
    });
    window.document.dispatchEvent(rollingEvent);
    const currentMockSetTimeoutIndex = setTimeout.mock.calls.length - 1;

    expect(setTimeout.mock.calls[currentMockSetTimeoutIndex][1]).toBe(duration);
  });

  it('triggers a roll event when it is mounted and rolling property is not set (true)', () => {
    TestUtils.renderIntoDocument(<GenericDice />);
    rollingEvent = new CustomEvent('roll');
    window.document.dispatchEvent(rollingEvent);
    const currentMockSetTimeoutIndex = setTimeout.mock.calls.length - 1;

    expect(setTimeout.mock.calls[currentMockSetTimeoutIndex][1]).toBe(C.DURATION);
  });
});
