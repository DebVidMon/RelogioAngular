import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';;


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  constructor() { }

  checked: boolean;
  status: string;
  ONF: string;

  horario = new Date();
  intervalId:any;
  subscription: Subscription;

  hora: number;
  minuto: number;

  isShown: boolean = false; // hidden by default
  isHidden: boolean = true; // shown by default

  ngOnInit(): void {
    this.checked = true;
    this.liga();

    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.horario = new Date();
    }, 1000);

  }
  // on toggle method
  // to check status of checkbox
  liga() {
    this.checked = !this.checked;
    // check if checkbox is checked
    if (this.checked === true) {
      // if checked
      this.status = 'on';
      this.ONF = 'On';
    } else {
      // if unchecked
      this.status = 'off';
      this.ONF = 'Off';
      this.hora = 0;
      this.minuto = 0;
    }
  }

  OK(){
    this.isShown = !this.isShown;
    this.isHidden = !this.isHidden;
  }

  tocaAlarme(){
    let hora1 = this.horario.getUTCHours();
    let minuto1 = this.horario.getUTCMinutes();
    if(hora1 === this.hora && minuto1 === this.minuto){
      //toca alarme
      alert("toca alarme")
    }
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
