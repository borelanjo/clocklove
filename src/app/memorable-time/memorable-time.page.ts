import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MomentFromNowPipe } from '../core/shared/pipe/moment-from-now.pipe';
import { MemorableTime } from './shared/memorable-time.model';
import { MemorableTimeService } from './shared/memorable-time.service';

const { Share } = Plugins;

@Component({
  selector: 'app-memorable-time',
  templateUrl: './memorable-time.page.html',
  styleUrls: ['./memorable-time.page.scss'],
  providers: [MemorableTimeService]
})
export class MemorableTimePage implements OnInit {

  constructor(private memorableTimeService: MemorableTimeService) { }

  public memorableTimes: MemorableTime[];

  ngOnInit() {
    this.memorableTimeService.list().then(memorableTimes => {
      this.memorableTimes = memorableTimes;
      console.log(memorableTimes);
    });
    setInterval(() => {
      this.refresh();
    }, 15000);
  }
  refresh() {
    this.memorableTimeService.list().then(memorableTimes => {
      this.memorableTimes = memorableTimes;
      console.log(memorableTimes);
    });
  }

  async share(memorableTime: MemorableTime) {
    const duration = this.messageDuration(memorableTime.date);
    const body = `${memorableTime.description} ${memorableTime.action} ${duration}`;
    console.log(body);

    await Share.share({
      title: memorableTime.description,
      text: body,
      dialogTitle: 'Momentos Memoráveis'
    });
  }

  public addMemorableTime() {
    this.memorableTimeService.saveAll([
      new MemorableTime().deserialize({
        description: 'Meu namoro com Camily',
        date: new Date('2014-01-25 18:00:00'),
        action: 'começou há'
      }),
      new MemorableTime().deserialize({
        description: 'Meu casamento civil com Camily',
        date: new Date('2019-01-24 14:00:00'),
        action: 'começou há'
      }),
      new MemorableTime().deserialize({
        description: 'Meu casamento religioso com Camily',
        date: new Date('2019-01-26 20:00:00'),
        action: 'começou há'
      }),
      new MemorableTime().deserialize({
        description: 'Meu nascimento',
        date: new Date('1991-06-18 23:15:00'),
        action: 'foi há'
      }),
      new MemorableTime().deserialize({
        description: 'Virei bacharel em Sistemas de Informação',
        date: new Date('2013-06-27 00:00:00'),
        action: 'exatamente há'
      }),
      new MemorableTime().deserialize({
        description: 'Meu batismo',
        date: new Date('2019-05-26 00:00:00'),
        action: 'exatamente há'
      }),
    ]);
  }

  private messageDuration(date: any) {
    const fromNow = new MomentFromNowPipe();
    const years = fromNow.transform(date, 'years');
    const months = fromNow.transform(date, 'months');
    const days = fromNow.transform(date, 'days');
    const hours = fromNow.transform(date, 'hours');
    const minutes = fromNow.transform(date, 'minutes');
    const seconds = fromNow.transform(date, 'seconds');
    return `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
  }

}
