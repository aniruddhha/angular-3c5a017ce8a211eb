import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rpt'
})
export class CustPipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.repeat(args);
  }
}
