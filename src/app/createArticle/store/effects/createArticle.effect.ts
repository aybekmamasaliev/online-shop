import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { CreateArticleService } from "../../services/createArticle.service";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "../actions/createArticle.action";
import { ArticleInterface } from "../../../shared/types/article.interface";


@Injectable()

export class CreateArticleEffect {
    createArticle$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleAction),
        switchMap(({ articleInput }) => {
            return this.createArticleServise.createArticle(articleInput).pipe(
                map((article: ArticleInterface) => {
                    return createArticleSuccessAction({article})
                }),

                catchError((errorResponse: HttpErrorResponse) => {
                    return of(createArticleFailureAction({ errors: errorResponse.error.errors }))
                }))
        })
    ))

    redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleSuccessAction), tap(({article}) => {
            this.router.navigate(['/articles', article.slug])
        })
    ),
        { dispatch: false }
    )
    constructor(
        private actions$: Actions,
        private createArticleServise: CreateArticleService,
        private router: Router
    ) {
    }
}