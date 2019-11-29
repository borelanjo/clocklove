import { Component, OnInit } from '@angular/core';
import { MemorableTimeService } from '../shared/memorable-time.service';
import { MemorableTime } from '../shared/memorable-time.model';

@Component({
  selector: 'app-memorable-time-registration',
  templateUrl: './memorable-time-registration.page.html',
  styleUrls: ['./memorable-time-registration.page.scss'],
})
export class MemorableTimeRegistrationPage implements OnInit {

  constructor(private memorableTimeService: MemorableTimeService) { }

  ngOnInit() {
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

}
