import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  // private toPt = {
  //   year
  // }

  transform(date: moment.MomentInput, converter: string) {
    if (converter === 'message') {
      return this.makeMessage(date);
    }
    const now = moment();
    const before = moment(date);
    const duration = moment.duration(now.diff(before))[converter]();
    if (Number(duration) === 0) {
      return '';
    }
    return duration;
  }

  private makeMessage(date: moment.MomentInput): string {
    const fromNow = this;
    const years = fromNow.transform(date, 'years');
    const months = fromNow.transform(date, 'months');
    const days = fromNow.transform(date, 'days');
    const hours = fromNow.transform(date, 'hours');
    const minutes = fromNow.transform(date, 'minutes');
    const seconds = fromNow.transform(date, 'seconds');
    let message = '';

    if (years > 0) {
      message += `${years} anos`;
    }

    if (months) {
      message += (message ? ', ' : '') + `${months} meses`;
    }

    if (days) {
      message += (message ? ', ' : '') + `${days} dias`;
    }

    if (hours) {
      message += (message ? ', ' : '') + `${hours} horas`;
    }

    if (minutes) {
      message += (message ? ', ' : '') + `${minutes} minutos`;
    }

    if (seconds) {
      message += (message ? 'e ' : '') + `${seconds} segundos`;
    }

    return message;
  }

}
