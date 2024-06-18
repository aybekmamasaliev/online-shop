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


const routes: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  providers: [AuthService],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrormessagesModule
  ],

})
export class AuthModule { }
