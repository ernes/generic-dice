/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

jest.unmock('../dice-shadow');

describe('DiceShadow', () => {
  it('exists.', () => {
    const DiceShadow = require('../dice-shadow').default;
    expect(DiceShadow).toBeDefined();
  });

  it('renders an element that is not animated.', () => {
    const DiceShadow = require('../dice-shadow').default;
    const component = renderer.create(
      <DiceShadow animation="" />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an element that *is* animated.', () => {
    const DiceShadow = require('../dice-shadow').default;
    const component = renderer.create(
      <DiceShadow animation="thrown" />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
