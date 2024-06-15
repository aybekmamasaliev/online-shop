import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../../store/actions/register.action';
import { Observable, of } from 'rxjs';
import { AppStateInterface } from '../../../../shared/types/appState.interface';
import { isSubmittingSelector } from '../../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
    
  form: FormGroup;

  isSubmitting$:Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) {}

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
    this.store.dispatch(registerAction(this.form.value));
  }
}
