import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDepositComponent } from './pages/admin-deposit/admin-deposit.component';
import { AdminRequestComponent } from './pages/admin-request/admin-request.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestComponent } from './pages/request/request.component';
import { TransferComponent } from './pages/transfer/transfer.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full', 
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'request',
    component: RequestComponent,
    pathMatch: 'full'
  },
  {
    path:'transfer',
    component: TransferComponent,
    pathMatch: 'full'

  },

  {
    path: 'admin',
    component: AdminComponent,
    pathMatch:'full'
  },
  {

    path: 'ad-deposit',
    component: AdminDepositComponent,
    pathMatch:'full'
  },
  {
    path: 'ad-request',
    component: AdminRequestComponent,
    pathMatch:'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
