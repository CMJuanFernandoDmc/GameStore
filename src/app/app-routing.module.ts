import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'oferts',
    loadChildren: () => import('./oferts/oferts.module').then( m => m.OfertsPageModule)
  },
  {
    path: 'buy-mk1-ps5',
    loadChildren: () => import('./buy-mk1-ps5/buy-mk1-ps5.module').then( m => m.BuyMk1Ps5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
