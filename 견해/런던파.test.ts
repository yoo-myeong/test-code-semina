import sinon from 'sinon';
import { A } from './A';
import { B } from './B';

describe('런던파', () => {
  it('항상 0을 반환한다.', () => {
    const a = sinon.createStubInstance(A);
    a.getNumber.returns(1);
    const sut = new B(a);

    const result = sut.getZero()

    expect(result).toBe(0);
  });
});

