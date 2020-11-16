import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(person: any): string {
    if(person.gender === 'male'){
      return `Mr ${person.name}` ;

    }else{
        return `Ms ${person.name}`
      }
    
  }

}
