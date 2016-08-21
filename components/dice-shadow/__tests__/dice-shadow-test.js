/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

const DiceShadow = require('../dice-shadow').default;

describe('DiceShadow', () => {
  it('exists.', () => {
    expect(DiceShadow).toBeDefined();
  });

  it('renders an element that is not animated.', () => {
    const component = renderer.create(
      <DiceShadow animation="" />
    );
    const tree = component.toJSON();

    console.log(`The tree is ${tree}`);

    expect(tree).toMatchSnapshot();
  });
});
