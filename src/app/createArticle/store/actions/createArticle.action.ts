import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { ArticleInputInterface } from "../../../shared/types/articleInput.interface";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { BackendErrorInterface } from "../../../shared/types/backendErrorsInterface.interface";

export const createArticleAction = createAction(
    ActionTypes.CREATE_ARTICLE,
    props<{articleInput:ArticleInputInterface}>()
)

export const createArticleSuccessAction = createAction(
    ActionTypes.CREATE_ARTICLE_SUCCESS,
    props<{article:ArticleInterface}>()
)

export const createArticleFailureAction = createAction(
    ActionTypes.CREATE_ARTICLE_FAILURE,
    props<{errors:BackendErrorInterface}>()
)