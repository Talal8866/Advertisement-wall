import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { IconsModule } from './icons/icons/icons-module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Header
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    Header,
    IconsModule,
    RouterModule
  ]
})
export class SharedModule { }
