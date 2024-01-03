import { Database } from './database';

export class Repository {
  constructor(private db: Database) {}

  getAll() {
    return this.db.query('SELECT ~~')
  }
}