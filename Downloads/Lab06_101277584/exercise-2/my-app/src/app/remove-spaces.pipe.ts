import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string): string {
    //let str = value.replace(/-/g,' ');
    let str = value.replace('-',' ');
    return str;
  }

}
