import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../../store/actions/register.action';
import { Observable, of } from 'rxjs';
import { AppStateInterface } from '../../../../shared/types/appState.interface';
import { isSubmittingSelector } from '../../../store/selectors';
import { AuthService } from '../../../auth/services/auth.service';
import { RegisterRequestInterface } from '../../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
    
  form: FormGroup;

  isSubmitting$:Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues():void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log("isSubmitting$", this.isSubmitting$)
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request:RegisterRequestInterface = {
      user:this.form.value
    }
    this.store.dispatch(registerAction({request}));
  }
}
