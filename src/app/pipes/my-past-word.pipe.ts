import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPastWord'
})
export class MyPastWordPipe implements PipeTransform {

  transform(value: string, activado: boolean = true): string {
    return (activado) ? '*'.repeat(value.length) : value;
  }

}
