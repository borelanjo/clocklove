import { Component, OnInit } from '@angular/core';
import { MemorableTimeService } from '../shared/memorable-time.service';
import { MemorableTime } from '../shared/memorable-time.model';
import { MemorableTimeForm } from '../shared/memorable-time.form';
import { MomentFromNowPipe } from 'src/app/core/shared/pipe/moment-from-now.pipe';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-memorable-time-registration',
  templateUrl: './memorable-time-registration.page.html',
  styleUrls: ['./memorable-time-registration.page.scss'],
})
export class MemorableTimeRegistrationPage implements OnInit {

  private _form = new MemorableTimeForm();
  private _formSubmitted = false;
  private _loading = false;

  public today = moment().format('YYYY-MM-DDTHH:mm:ss');
  public datePickerOptions: any;
  public timePickerOptions: any;

  constructor(
    private memorableTimeService: MemorableTimeService,
    private router: Router) {
  }

  ngOnInit() {
  }

  get form(): MemorableTimeForm {
    return this._form;
  }

  get formSubmitted(): boolean {
    return this._formSubmitted;
  }

  get loading(): boolean {
    return this._loading;
  }

  public sharePreview(): string {
    const dateTime = moment(moment(this._form.get('date').value).format('YYYY-MM-DD') + ' ' + moment(this._form.get('time').value).format('HH:mm')).toDate();
    const duration = this.messageDuration(dateTime);
    const body = `${this._form.get('description').value} ${this._form.get('action').value} ${duration}`;

    return body;
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

  public create() {
    this._formSubmitted = true;

    if (this._form.invalid) {
      return;
    }

    this._loading = true;

    const memorable = new MemorableTime().deserializeFromForm(this._form);

    this.memorableTimeService.save(memorable).then(() => {
      this._loading = false;
      this.router.navigate(['tabs/memorable-time']);
    });
  }

}
