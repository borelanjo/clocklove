import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemorableTime } from 'src/app/memorable-time/shared/memorable-time.model';

@Component({
  selector: 'app-memorable-card',
  templateUrl: './memorable-card.component.html',
  styleUrls: ['./memorable-card.component.scss'],
})
export class MemorableCardComponent implements OnInit {

  @Input() headerColor: string;
  @Input() memorableTime: MemorableTime;

  @Output() hold: EventEmitter<any> = new EventEmitter();
  @Output() share: EventEmitter<any> = new EventEmitter();

  private _showDetail = true;

  constructor() { }

  ngOnInit() {}

  onHold() {
    this.hold.emit();
  }

  onShare() {
    this.share.emit();
  }

  get showDetail() {
    return this._showDetail;
  }

  public expandDetail(){
    this._showDetail = !this._showDetail;
  }

}
