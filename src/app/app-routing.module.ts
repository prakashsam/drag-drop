import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Drag1Component } from './drag1/drag1.component';
import { Drag2Component } from './drag2/drag2.component';
import { Drag3Component } from './drag3/drag3.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'drag1', component: Drag1Component },
  { path: 'drag2', component: Drag2Component },
  { path: 'drag3', component: Drag3Component },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
