import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { Adminlayout } from './adminlayout/adminlayout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Header,
    Footer,
    Sidebar,
    Adminlayout
  ],
  imports: [
    CommonModule,
    RouterModule  
  ]
})
export class LayoutModule { }
