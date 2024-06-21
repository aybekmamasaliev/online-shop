import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrorInterface } from '../../../shared/types/backendErrorsInterface.interface';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: LoginRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(loginAction({ request }));
  }
}
