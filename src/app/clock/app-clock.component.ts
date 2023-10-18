import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-clock',
 templateUrl: './app-clock.component.html',
 styleUrls: ['./app-clock.component.scss']
})
export class AppClockComponent implements OnInit {
 hours: string;
 minutes: string;
 seconds: string;
 showColon: boolean;

 constructor() {
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
    this.showColon = true;
 }

 ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
      this.showColon = !this.showColon;
    }, 1000);
 }

 updateTime(): void {
    const currentTime = new Date();
    this.hours = this.pad(currentTime.getHours());
    this.minutes = this.pad(currentTime.getMinutes());
    this.seconds = this.pad(currentTime.getSeconds());
 }

 pad(num: number): string {
   return num < 10 ? '0' + num : num.toString();
 }
}
