import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosSystemComponent } from './pos-system/pos-system.component';

const routes: Routes = [
  {path: 'posSystem', component:PosSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
