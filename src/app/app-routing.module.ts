import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dash-board',
    loadChildren: () => import('./Client/dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
   {
      path: '',
     redirectTo: 'dash-board',
     pathMatch: 'full'
   },
  {
    path: 'register',
    loadChildren: () => import('./Client/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Client/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Client/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Admin/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'payment',
    loadChildren: () => import('./Client/payment/payment.module').then( m => m.PaymentPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
