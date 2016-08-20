import sum from '../sum';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', sum => {
    expect(sum(1, 2)).toEqual(3);
  });

  it('add 3 + 6 to equal 9', sum => {
    expect(sum(3, 6)).toEqual(9);
  });
});
