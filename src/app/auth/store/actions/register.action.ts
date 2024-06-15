import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { CurrentUserIntrface } from '../../../shared/types/currentUser.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserIntrface }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);