import { Table } from 'src/core/entities/table';

export class TableValidator {
  validate(table: Table, data: Array<{ [key: string]: any }>) {
    const tableFields = table.colums;
    const newData: Array<{ [key: string]: any }> = [];

    data.forEach((lineData) => {
      const keys = Object.keys(lineData);

      keys.forEach((key) => {
        const currentObject = lineData;
        const currentField = tableFields.find((field) => key === field.name);
        if (currentField && currentField.maxLength <= lineData[key].length) {
          //Aqui tu faz o slice do campo
          //currentObject[key] = TUA lógica;
        }
        newData.push(currentObject);
      });
    });

    return newData;
  }
}
