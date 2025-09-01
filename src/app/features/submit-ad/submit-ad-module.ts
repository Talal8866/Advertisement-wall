import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitAd } from './submit-ad component/submit-ad';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SubmitAd }
]

@NgModule({
  declarations: [
    SubmitAd
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SubmitAdModule { }
