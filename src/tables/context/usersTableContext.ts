import { Table } from 'src/core/entities/table';
import { Builder } from '../builder/builder';
import { Context } from './context';
import { TableValidator } from './table.validator';

export class UsersTableContext implements Context {
  constructor(
    private readonly builder: Builder,
    private validator: TableValidator,
  ) {}
  public execute(table: Table): void {
    const data = []; //Busca no banco as infos
    const validatedData = this.validator.validate(table, data);
    this.builder.build(table, validatedData);
  }
}
