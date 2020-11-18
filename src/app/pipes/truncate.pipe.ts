import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 80){
      return value;
    }else{
      // const slince =  value.slice(0, 16);
      // const tochka = '...';
      return value.slice(0, 80)+'...';

    }
  }

  // transform(value: string, limit = 65, completeWords = false, ellipsis = '...') {
  //   if (completeWords) {
  //     limit = value.substr(0, limit).lastIndexOf(' ');
  //   }
  //   return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  // }

}
