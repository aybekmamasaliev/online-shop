import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { RegisterComponent } from '../components/register/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from '../store/effects/register.effect';
import { BackendErrormessagesModule } from '../../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../../shared/services/persistance.service';
import { LoginEffect } from '../store/effects/login.effect';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrormessagesModule
  ],

})
export class AuthModule { }
