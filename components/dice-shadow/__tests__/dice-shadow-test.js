/* global describe it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import DiceShadow from '../dice-shadow';

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
});
