import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// we do not need to import components with lazy loading

// const routes: Routes = [
//   { path: "", component: AdsWall },
//   { path: "admin-panel", component: AdminPanel },
//   { path: "submit-ad", component: SubmitAd },
//   { path: 'category/:slug', component: CategoryAds },
//   { path: '**', redirectTo: '' }
// ];

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./features/ads-wall/ads-wall-module').then(m => m.AdsWallModule)
  },
  {
    path: "admin-panel",
    loadChildren: () => import('./features/admin-panel/admin-panel-module').then(m => m.AdminPanelModule)
  },
  {
    path: "submit-ad",
    loadChildren: () => import('./features/submit-ad/submit-ad-module').then(m => m.SubmitAdModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./features/category-ads/category-ads-module').then(m => m.CategoryAdsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }