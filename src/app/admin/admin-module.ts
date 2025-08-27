import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Adminlayout } from '../layout/adminlayout/adminlayout';
import { Dashboard } from '../dashboard/dashboard';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';
import { Sidebar } from '../layout/sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { ListRegisterRequest } from './list-register-request/list-register-request';


@NgModule({
  declarations: [
   
  
    ListRegisterRequest
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
  ]
})
export class AdminModule { }
