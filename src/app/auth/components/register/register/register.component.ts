import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../../store/actions/register.action';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../../../../shared/types/appState.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../../store/selectors';
import { RegisterRequestInterface } from '../../../types/registerRequest.interface';
import { BackendErrorInterface } from '../../../../shared/types/backendErrorsInterface.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  // corrected styleUrls
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$:Observable<BackendErrorInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

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
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({ request }));
  }
}