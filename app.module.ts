import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar01Component } from './components/navbar01/navbar01.component';
import { Foorter01Component } from './components/foorter01/foorter01.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Nav2Component } from './components/nav2/nav2.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './pages/request/request.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminDepositComponent } from './pages/admin-deposit/admin-deposit.component';
import { AdminRequestComponent } from './pages/admin-request/admin-request.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar01Component,
    Foorter01Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Nav2Component,
    ProfileComponent,
    RequestComponent,
    TransferComponent,
    AdminComponent,
    AdminDepositComponent,
    AdminRequestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
