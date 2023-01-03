import { Column } from 'src/core/entities/column';
import { Table } from 'src/core/entities/table';
import { TablesEnum } from 'src/core/enums/tablesEnum';

export class UsersTable implements Table {
  name: TablesEnum;
  description?: string;
  colums: Column[];
  fileAlias: string;

  constructor() {
    this.colums = [{ alias: 'nome', name: 'cnomnome', maxLength: 10 }];
    this.fileAlias = 'miapika.txt';
    this.name = TablesEnum.USERS;
  }
}
