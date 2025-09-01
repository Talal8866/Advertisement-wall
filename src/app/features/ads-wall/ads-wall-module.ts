import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsWall } from './ads-wall component/ads-wall';
import { CategoryCard } from './components/category-card/category-card';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdsWall }
];

@NgModule({
  declarations: [
    AdsWall,
    CategoryCard
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class AdsWallModule { }
