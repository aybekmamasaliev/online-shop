import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../../shared/types/articleInput.interface";
import { Observable, filter, map } from "rxjs";
import { BackendErrorInterface } from "../../../shared/types/backendErrorsInterface.interface";
import { Store, select } from "@ngrx/store";
import { AppStateInterface } from "../../../shared/types/appState.interface";
import { articleSelector, isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { ActivatedRoute } from "@angular/router";
import { getArticleAction } from "../../../article/store/actions/getArticle.action";
import { createArticleAction } from "../../../createArticle/store/actions/createArticle.action";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { updateArticleAction } from "../../store/actions/updateArticle.action";

@Component({
    selector: "mc-edit-article",
    templateUrl: "./editArticle.component.html"
})

export class EditArticleComponent implements OnInit {

    initialValues$: Observable<ArticleInputInterface>
    isSubmitting$: Observable<boolean>
    isLoading$: Observable<boolean>
    backendErrors$: Observable<BackendErrorInterface | null>
    slug: any

    constructor(
        private store: Store<AppStateInterface>,
        private route: ActivatedRoute) { }


    onSubmit(articleInput: ArticleInputInterface): void {
        this.store.dispatch(updateArticleAction({ articleInput, slug:this.slug }))
    }

    ngOnInit(): void {
        this.initializeValues()
        this.fetchData()
    }

    initializeValues(): void {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
        this.initialValues$ = this.store.pipe(select(articleSelector),
            filter(Boolean),
            map((article: ArticleInterface) => {
                return {
                    title: article.title,
                    description: article.description,
                    body: article.body,
                    tagList: article.tagList

                }
            }))
    }


    fetchData(): void {
        this.store.dispatch(getArticleAction({ slug: this.slug }))
    }
}