/* global describe it expect */

import DiceShadow from '../dice-shadow';

describe('dice-shadow', () => {
  it('exists', () => {
    expect(DiceShadow).toBeDefined();
  });

  it('renders an element', () => {
    const diceShadow = new DiceShadow();
    const result = diceShadow.render.mockReturnValueOnce();
    console.log(result);
    expect(result).toBeDefined();
  });
});
