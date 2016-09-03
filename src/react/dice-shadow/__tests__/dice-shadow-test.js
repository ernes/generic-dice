/* global describe jest it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import DiceShadow from '../dice-shadow';

jest.unmock('../dice-shadow');

describe('DiceShadow', () => {
  it('exists.', () => {
    expect(DiceShadow).toBeDefined();
  });

  it('renders an element that is not animated.', () => {
    const component = renderer.create(
      <DiceShadow animation="" />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an element that *is* animated.', () => {
    const component = renderer.create(
      <DiceShadow animation="thrown" />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
