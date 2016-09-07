/* global describe jest it expect beforeEach afterEach jasmine done */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import JasminePromiseMatchers from 'jasmine-es6-promise-matchers';

import GenericDice from '../generic-dice';

jest.unmock('../generic-dice');
jest.unmock('../roll');

describe('roll event', () => {
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

describe('animate Promise', () => {
  beforeEach(JasminePromiseMatchers.install);

  afterEach(JasminePromiseMatchers.uninstall);

  it('is rejected if the duration is null', () => {
    expect(animate).toBeRejected(null, done);
  });

  it('is rejected if the duration is not a number', () => {
    expect(animate).toBeRejected('I am not a number', done);
  });

  it('is rejected if the duration is a negative number', () => {
    expect(animate).toBeRejected(-2, done);
  });

  it('resolves if the duration is a positive number', () => {
    expect(animate).toBeResolvesWith(700, done);
  });

});
