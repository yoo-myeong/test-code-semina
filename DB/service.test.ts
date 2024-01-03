import sinon from 'sinon';
import { Repository } from './repository';
import { Service } from './service';
import { Database } from './database';

describe('service', () => {
  it('전부 가져온다', () => {
    const repository = new Repository(new Database());
    const sut = new Service(repository)

    const result = sut.getAll();

    expect(result).toEqual([]);
  });
})
