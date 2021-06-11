import { RelogioComponent } from './relogio/relogio.component';
import { TimerComponent } from './timer/timer.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"", redirectTo: "inicio", pathMatch: "full"},
  {path: 'cronometro' , component: CronometroComponent},
  {path: 'timer' , component: TimerComponent},
  {path: 'relogio' , component: RelogioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
