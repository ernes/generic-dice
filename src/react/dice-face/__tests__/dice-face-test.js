/* global describe jest it expect */

import React from 'react';
import renderer from 'react-test-renderer';

import DiceFace from '../dice-face';

jest.unmock('../dice-face');

describe('DiceFace', () => {
  it('exists.', () => {
    expect(DiceFace).toBeDefined();
  });

  it('renders an element with a default face value of 1.', () => {
    const component = renderer.create(
      <DiceFace />
    );
    const tree = component.toJSON();

    // todo: test the face value is indeed 1.

    expect(tree).toMatchSnapshot();
  });
});
