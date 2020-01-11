import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

import { MemorableTimeService } from '../shared/memorable-time.service';
import { MemorableTime } from '../shared/memorable-time.model';

import { MomentFromNowPipe } from 'src/app/shared/pipe/moment-from-now.pipe';

@Component({
  selector: 'app-memorable-time-listing',
  templateUrl: './memorable-time-listing.page.html',
  styleUrls: ['./memorable-time-listing.page.scss'],
})
export class MemorableTimeListingPage implements OnInit {

  constructor(private memorableTimeService: MemorableTimeService) { }

  public memorableTimes: MemorableTime[];
  public now = new Date();
  public memorableSelected: MemorableTime;

  ngOnInit() {
    this.fillList().then(() => {
      this.refresh();
    });
  }

  doReorder(ev: any) {
    this.memorableTimes = ev.detail.complete(this.memorableTimes);

    this.memorableTimeService.saveAll(this.memorableTimes).then((response) => {
    });

  }

  onSelect(memorableTime: MemorableTime){
    if (memorableTime === this.memorableSelected) {
      this.memorableSelected = null;
      return;
    }

    this.memorableSelected = memorableTime;
  }

  delete() {
    this.memorableTimeService.delete(this.memorableTimes, this.memorableSelected).then(m =>{
      this.memorableTimes = m;
      this.memorableSelected = null;
    });
  }

  cardColor(memorableTime: MemorableTime): string{
    if (memorableTime === this.memorableSelected) {
      return 'secondary';
    }
    return 'light';
  }

  async fillList(): Promise<MemorableTime[]> {
    return this.memorableTimeService.list().then(memorableTimes => {
      this.memorableTimes = memorableTimes;
      this.now = new Date(this.now);
      return this.memorableTimes;
    });
  }

  refresh() {
    const now = new Date();
    const initialDelay = 1 * 1000 - (now.getSeconds() * 1000 + now.getMilliseconds());
    setInterval(() => {
      this.memorableTimes.forEach(mt => {
        mt.date = new Date(mt.date);
      });
    }, initialDelay);

  }

  async share() {
    const fromNow = new MomentFromNowPipe();
    const body = `${this.memorableSelected.action} ${fromNow.transform(this.memorableSelected.date, 'message')}`;
    console.log(body);

    await Share.share({
      title: this.memorableSelected.description,
      text: body,
      dialogTitle: 'Momentos Memoráveis'
    }).then(res => {
      console.log(res);
    }).catch(e => {
      console.error(e);
    });
  }

}
