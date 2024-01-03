import { Repository } from './repository';

export class Service {
  constructor(
    private readonly repository: Repository
  ) { }

  getAll() {
    return this.repository.getAll()
  }
}