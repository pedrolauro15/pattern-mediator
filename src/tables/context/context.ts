import { Table } from 'src/core/entities/table';

export abstract class Context {
  abstract execute(table: Table): void;
}
