import { Injectable } from '@nestjs/common';
import { Table } from 'src/core/entities/table';
import { TablesEnum } from 'src/core/enums/tablesEnum';
import { Context } from '../context/context';
import { UsersTableContext } from '../context/usersTableContext';
import { UsersTable } from '../dictionary/usersTable';
import { Mediator } from './mediator';

@Injectable()
export class TableMediator implements Mediator<string> {
  private tablesMapper: Map<TablesEnum, { context: Context; table: Table }>;
  constructor(private usersTableContext: UsersTableContext) {
    this.tablesMapper = new Map();
    this.tablesMapper.set(TablesEnum.USERS, {
      context: this.usersTableContext,
      table: new UsersTable(),
    });
  }
  execute(data: string): void {
    const current = this.tablesMapper.get(data as TablesEnum);
    if (current) {
      current.context.execute(current.table);
    }
  }
}
