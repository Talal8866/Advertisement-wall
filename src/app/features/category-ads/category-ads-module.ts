import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAds } from './category-ads component/category-ads';
import { VipCard } from './components/vip-card/vip-card';
import { SharedModule } from '../../shared/shared-module';
import { AdCard } from './components/ad-card/ad-card';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ":slug", component: CategoryAds}
]

@NgModule({
  declarations: [
    CategoryAds,
    VipCard,
    AdCard
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryAdsModule { }
