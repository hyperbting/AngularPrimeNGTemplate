import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tester-timepicker',
  templateUrl: './timpicker.component.html',
  styleUrls: ['./timpicker.component.css']
})
export class TimpickerComponent implements OnInit {
  @Input() day1TimeSpanList: TimeSpan[];

  constructor() { }

  ngOnInit() {
    this.day1TimeSpanList = [
      { 'open': '12:34', 'close': '23:45' },
      { 'open': '2:34', 'close': '6:45' }
    ];
  }

}

export interface DayTimeSpan extends TimeSpan {
  day: number;
}

export interface TimeSpan {
  open: string;
  close: string;
}
