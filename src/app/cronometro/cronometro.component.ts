import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  hora: any;
  min: any;
  seg: any;
  mlseg: any;
  cron: any;
  constructor() { }

  ngOnInit(): void {
    this.hora = 0;
    this.min = 0;
    this.seg = 0;
    this.mlseg = 0;
  }

  start() {
    this.cron = setInterval(() => { this.cronometro(); }, 10);
  }

  pause() {
    clearInterval(this.cron)
  }

  reset() {
    this.pause();
    this.hora = 0;
    this.min = 0;
    this.seg = 0;
    this.mlseg = 0;
  }

  cronometro() {
    if ((this.mlseg += 10) === 1000) {
      this.mlseg = 0;
      this.seg++;
    }
    if (this.seg === 60) {
      this.seg = 0;
      this.min++;
    }
    if (this.min === 60) {
      this.min = 0;
      this.hora++;
    }
  }

}
