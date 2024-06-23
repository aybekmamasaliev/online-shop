import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState:AuthStateInterface) => {
    return authState.isSubmitting
})

export const validationErrorsSelector = createSelector(authFeatureSelector, (authState:AuthStateInterface) => {
    return authState.validationErrors
})

export const isLoggedInSelector = createSelector(authFeatureSelector, (authState:AuthStateInterface) => {
    return authState.isLogedIn
})

export const isAnonymousSelector = createSelector(authFeatureSelector, (authState:AuthStateInterface) => {
    return authState.isLogedIn === false
})

export const currentUserSelector = createSelector(authFeatureSelector, (authState:AuthStateInterface) => {
    return authState.currentUser
})