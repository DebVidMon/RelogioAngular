import { SyncAsync } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit {

  constructor() { }
  horario = new Date();
  intervalId:any;
  subscription: Subscription;


  ngOnInit(): void {
     // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.horario = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
