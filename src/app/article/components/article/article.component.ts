import { Component, OnDestroy, OnInit } from "@angular/core"
import { AppStateInterface } from "../../../shared/types/appState.interface"
import { Store, select } from "@ngrx/store"
import { getArticleAction } from "../../store/actions/getArticle.action"
import { ActivatedRoute } from "@angular/router"
import { Observable, Subscription, combineLatest, map } from "rxjs"
import { ArticleInterface } from "../../../shared/types/article.interface"
import { articleSelector, errorSelector, isLoadingSelector } from "../../store/selectors"
import { currentUserSelector } from "../../../auth/store/selectors"
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface"


@Component({
    selector: "mc-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"]
})

export class ArticleComponent implements OnInit, OnDestroy {

    slug: any
    article: ArticleInterface | null
    articleSubscription: Subscription
    isLoading$: Observable<boolean>
    error$:Observable<string | null>
    isAuthor$:Observable<boolean>

    constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
        this.fetchData()
    }

    initializeValues(): void {

        this.slug = this.route.snapshot.paramMap.get('slug')

        this.isLoading$ = this.store.pipe(select(isLoadingSelector))

        this.error$ = this.store.pipe(select(errorSelector))

        this.isAuthor$ = combineLatest(
            this.store.pipe(select(articleSelector)),
            this.store.pipe(select(currentUserSelector))
        ).pipe(map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {

            if(!article || !currentUser){
                return false
            }

            return currentUser.username === article.author.username
        }))

        console.log(this.slug)

    }

    initializeListeners(): void {
        this.articleSubscription = this.store.pipe(select(articleSelector))
        .subscribe((article: ArticleInterface | null) =>{
            this.article = article
        })
    }

    fetchData(): void {
        this.store.dispatch(getArticleAction({ slug: this.slug }))
    }

    ngOnDestroy(): void {
        this.articleSubscription.unsubscribe()
    }

}