import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  transform(date: moment.MomentInput, converter: string) {
    const now = moment();
    const before = moment(date);
    const duration = moment.duration(now.diff(before))[converter]();
    return duration;
  }

}
