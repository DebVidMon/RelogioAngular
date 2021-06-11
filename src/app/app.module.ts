import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelogioComponent } from './relogio/relogio.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { AlarmComponent } from './alarm/alarm.component';

@NgModule({
  declarations: [
    AppComponent,
    RelogioComponent,
    CronometroComponent,
    TimerComponent,
    AlarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
