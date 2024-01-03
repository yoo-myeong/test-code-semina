import sinon from 'sinon';
import { Repository } from './repository';
import { Service } from './service';

describe('service', () => {
  it('전부 가져온다', () => {
    const repository = sinon.createStubInstance(Repository)
    repository.getAll.returns([]);
    const sut = new Service(repository)

    const result = sut.getAll();

    expect(result).toEqual([]);
  });
})
