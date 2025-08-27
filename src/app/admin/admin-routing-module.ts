import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { Adminlayout } from '../layout/adminlayout/adminlayout';
import { ListRegisterRequest } from './list-register-request/list-register-request';

const routes: Routes = [
  {
    path: '',
    component: Adminlayout,
    children: [
      { path: 'dashboard', component: Dashboard},
      { path: 'pending-students', component: ListRegisterRequest },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
