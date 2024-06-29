import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { FeedStateInterface } from "../../types/feedState.interface";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { Observable, Subscription } from "rxjs";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";
import { AppStateInterface } from "../../../../types/appState.interface";
import { environment } from "../../../../../environment/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";
import queryString from "query-string";


@Component({
    selector: "mc-feed",
    templateUrl: "./feed.component.html",
    styleUrls: ["./feed.component.css"]
})

export class FeedComponent implements OnInit, OnDestroy, OnChanges {

    @Input("apiUrl") apiUrlProps: string


    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<GetFeedResponseInterface | null>
    limit = environment.limit
    baseUrl: string
    queryParamSubscription: Subscription
    currentPage: number

    constructor(
        private store: Store<AppStateInterface>,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListenrs()
        console.log("init feed")
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        const isApiUrlChanged = !changes['apiUrlProps'].firstChange && 
        changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue

        if(isApiUrlChanged){
            this.fetchFeed()
        }

        console.log(isApiUrlChanged)
    }

    ngOnDestroy(): void {
        this.queryParamSubscription.unsubscribe()
    }


    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
        this.baseUrl = this.router.url.split('?')[0]
    }

    initializeListenrs(): void {
        this.queryParamSubscription = this.route.queryParams.subscribe((params: Params) => {
            console.log(params)
            this.currentPage = Number(params["page"] || "1")

            console.log(this.currentPage)
            this.fetchFeed()
        })
    }

    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit
        const parsedUrl = queryString.parseUrl(this.apiUrlProps);
        const stringifiedParams = queryString.stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })

        const apiUrlsWithParams = `${parsedUrl.url}?${stringifiedParams}`

        console.log("parseUrrl", parsedUrl)


        this.store.dispatch(getFeedAction({ url: apiUrlsWithParams }))
    }

}