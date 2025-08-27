import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';
import { AuthRoutingModule } from './auth-routing-module';


@NgModule({
  declarations: [Register, Login],
  imports: [CommonModule,FormsModule , ReactiveFormsModule, AuthRoutingModule]
})
export class AuthModule { }
