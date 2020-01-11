import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFormat'
})
export class MomentFormatPipe implements PipeTransform {

  transform(date: moment.MomentInput, format: string) {
    moment.locale('pt-Br');
    return moment(date).format(format);
  }

}
