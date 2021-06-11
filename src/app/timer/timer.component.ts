import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  mlseg: number;
  cron: any;
  hora1: number;
  min1: number;
  seg1: number;
  hora: number;
  min: number;
  seg: number;
  isShown: boolean = false; // hidden by default
  isHidden: boolean = true; // shown by default
  constructor() { }

  ngOnInit(): void {
    this.mlseg = 0;
    this.seg = 0;
    this.min = 0;
    this.hora = 0;
  }

  start() {
    this.pause();
    this.isShown = !this.isShown;
    this.isHidden = !this.isHidden;
    if (this.hora1 > 0) { this.hora = this.hora1; } else { this.hora = 0; }
    if (this.min1 > 0) { this.min = this.min1; } else { this.min = 0; }
    if (this.seg1 > 0) { this.seg = this.seg1; } else { this.seg = 0; }
    this.mlseg = 0;
    this.cron = setInterval(() => { this.cronometro(); }, 100);
  }
  // Consertar o pause
  pause() {
    clearInterval(this.cron);
  }

  reset() {
    this.pause();
    this.isShown = !this.isShown;
    this.isHidden = !this.isHidden;
    this.hora = 0;
    this.min = 0;
    this.seg = 0;
    this.mlseg = 0;
  }

  cronometro() {
    if ((this.mlseg += 100) === 1000) {
      this.mlseg = 0;
      if (this.seg > 0) {
        this.seg--;
      } else if (this.seg === 0) {
        if (this.min > 0) {
          this.seg = 59;
          this.min--;
        } else if (this.min === 0) {
          if (this.hora > 0) {
            this.min = 59;
            this.hora--;
          } else if (this.hora === 0) {
            Swal.fire({
              text: 'Acabou o tempo',
              icon: 'info',
              background: 'cornflowerblue',
              confirmButtonText: 'OK'
            });
            this.pause();
            this.hora = 0;
            this.min = 0;
            this.seg = 0;
          }
        }
      }
    }
  }

}
