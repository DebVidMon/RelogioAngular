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

  erroh: string;
  errom: string;

  horario = new Date();
  intervalId: any;
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
      this.tocaAlarme();
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

  validaHora(){
    if(this.hora < 0 || this.hora > 23){
      this.erroh = "Hora inválida";
    } else {
      this.erroh = '';
    }
  }

  validaMinuto(){
    if(this.minuto < 0 || this.minuto > 59){
      this.errom = "Minuto inválido";
    } else {
      this.errom = '';
    }
  }

  tocaAlarme(){
    let hora1 = this.horario.getUTCHours();
    let minuto1 = this.horario.getUTCMinutes();
    if(hora1 === this.hora && minuto1 === this.minuto){
      //toca alarme
      alert("toca alarme")
    }
  }

  // GetTime() {
  //   var dt = new Date();
  //   document.clock.local.value = IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes());
  //   setTimeout("GetTime()", 1000);
  //   curTime = (IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()));
  //   }
  //   IfZero(num) {
  //   return ((num <= 9) ? ("0" + num) : num);
  //   }
  //   alarmSet() {
  //   hourNum = document.clock.hourOpt[document.clock.hourOpt.selectedIndex].value;
  //   minNum = document.clock.minOpt[document.clock.minOpt.selectedIndex].value;
  //   alarmTime = hourNum + ":" + minNum;
  //   }
  //   alarmOn() {
  //   if (alarmTime == curTime) {
  //   document.all.sound.src = document.clock.alarmSound.value;
  //   }
  //   else {
  //   setTimeout("alarmOn()", 1000)
  //      }
  //   }
  //   alarmOff() {
  //   document.all.sound.src = "";
  //   alarmTime="";
  //   }
  //   snooze() {
  //   document.all.sound.src = "";
  //   var snoozeL = parseInt(document.clock.snoozeOpt[document.clock.snoozeOpt.selectedIndex].value);
  //   var snooze = new Date();
  //   alarmTime = IfZero(snooze.getHours()) + ":" + IfZero(snooze.getMinutes() + snoozeL);
  //   alarmOn();
  //   }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
