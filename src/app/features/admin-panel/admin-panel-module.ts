import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanel } from './admin-panel component/admin-panel';
import { AdsTabs } from './components/ads-tabs/ads-tabs';
import { AdsList } from './components/ads-list/ads-list';
import { AdCard } from './components/ad-card/ad-card';
import { IconsModule } from '../../shared/icons/icons/icons-module';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminPanel }
];

@NgModule({
  declarations: [
    AdminPanel,
    AdsTabs,
    AdsList,
    AdCard
  ],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPanelModule { }