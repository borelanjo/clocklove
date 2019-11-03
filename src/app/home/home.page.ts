import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public specialDates = [];

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { name: 'Company' },
    { name: 'Company' },
    { name: 'Company' },
  ];



  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.refresh(); // api call
   }, 1000);
  }
  refresh() {
    this.specialDates = [
      {
        nome: 'Namoro',
        data: new Date ('2014-01-25 18:00:00')
      },
      {
        nome: 'Casamento Civíl',
        data: new Date ('2019-01-24 14:00:00')
      },
      {
        nome: 'Casamento Religioso',
        data: new Date ('2019-01-26 20:00:00')
      },
    ];
  }

}
