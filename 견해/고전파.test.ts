import sinon from 'sinon';
import { A } from './A';
import { B } from './B';

describe('런던파', () => {
  it('항상 0을 반환한다.', () => {
    const a = new A();
    const sut = new B(a);

    const result = sut.getZero()

    expect(result).toBe(0);
  });
});

