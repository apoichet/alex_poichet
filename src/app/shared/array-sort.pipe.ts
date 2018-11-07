import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: Array<any>, field: string): Array<any> {
    array.sort((a: any, b: any) => {
      const sortField = a[field];
      if (Boolean(sortField)) {
        return a[field] === b[field] ? 0 : a[field] ? 1 : -1;
      } else if (Number(sortField)) {
        return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
      } else if (String(sortField)) {
        return String(a[field]).localeCompare(String(b[field]));
      } else {
        return 0;
      }
    });
    return array;
  }
}
