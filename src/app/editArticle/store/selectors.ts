
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CreateArticleStateInterface } from "../types/editArticleState.interface"
import { AppStateInterface } from "../../shared/types/appState.interface"


export const createArticleFeatureSelector = createFeatureSelector<
AppStateInterface, CreateArticleStateInterface>('createArticle')

export const isSubmittingSelector = createSelector(createArticleFeatureSelector,
     (createArticleState:CreateArticleStateInterface) => {
    return createArticleState.isSubmitting
})

export const validationErrorsSelector = createSelector(createArticleFeatureSelector,
     (createArticleState:CreateArticleStateInterface) => {
    return createArticleState.validationErrors
})