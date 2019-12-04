import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MemorableTimeService } from '../shared/memorable-time.service';
import { MemorableTime } from '../shared/memorable-time.model';
import { Share } from '@capacitor/core';
import { MomentFromNowPipe } from 'src/app/core/shared/pipe/moment-from-now.pipe';

@Component({
  selector: 'app-memorable-time-listing',
  templateUrl: './memorable-time-listing.page.html',
  styleUrls: ['./memorable-time-listing.page.scss'],
})
export class MemorableTimeListingPage implements OnInit {

  constructor(private memorableTimeService: MemorableTimeService, private cdr: ChangeDetectorRef) { }

  public memorableTimes: MemorableTime[];
  public now = new Date();
  public memorableSelected: MemorableTime;

  ngOnInit() {
    this.fillList();
    this.refresh();

  }

  onSelect(memorableTime: MemorableTime){
    if (memorableTime === this.memorableSelected) {
      this.memorableSelected = null;
      return;
    }

    this.memorableSelected = memorableTime;
  }

  delete() {
    console.log(this.memorableSelected);
    this.memorableTimes = this.memorableTimes.filter(item => item !== this.memorableSelected);
    this.memorableTimeService.saveAll(this.memorableTimes);
    this.memorableSelected = null;
  }

  cardColor(memorableTime: MemorableTime): string{
    if (memorableTime === this.memorableSelected) {
      return 'secondary';
    }
    return 'light';
  }

  fillList() {
    this.memorableTimeService.list().then(memorableTimes => {
      this.memorableTimes = memorableTimes;
      this.now = new Date(this.now);
    });
  }

  refresh() {
    const now = new Date();
    const initialDelay = 60 * 1000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    setInterval(() => {
      this.cdr.detectChanges();
      this.memorableTimes.forEach(mt => {
        mt.date = new Date(mt.date);
      });
    }, initialDelay);

  }

  async share(memorableTime: MemorableTime) {
    const duration = this.messageDuration(memorableTime.date);
    const body = `${memorableTime.description} ${memorableTime.action} ${duration}`;
    console.log(body);

    await Share.share({
      title: memorableTime.description,
      text: body,
      dialogTitle: 'Momentos Memoráveis'
    }).then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
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