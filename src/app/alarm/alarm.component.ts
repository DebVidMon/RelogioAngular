
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


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
  ngOnInit(): void {
    this.checked = true;
    this.liga();
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
    }
  }

}
