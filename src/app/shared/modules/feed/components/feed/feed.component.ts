import { Component, Input, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { FeedStateInterface } from "../../types/feedState.interface";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { Observable } from "rxjs";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";
import { AppStateInterface } from "../../../../types/appState.interface";
import { environment } from "../../../../../environment/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "mc-feed",
    templateUrl: "./feed.component.html",
    styleUrls: ["./feed.component.css"]
})

export class FeedComponent implements OnInit {

    @Input("apiUrl") apiUrlProps: string


    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<GetFeedResponseInterface | null>
    limit = environment.limit
    baseUrl:string

    constructor(
        private store: Store<AppStateInterface>,
        private router: Router, 
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.initializeValues()
        this.fetchData()
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
        this.initializeListenrs()
    }


    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
        this.baseUrl = this.router.url.split('?')[0]
    }

    initializeListenrs():void{
        this.route.queryParams.subscribe((params:Params)=>{
            console.log(params)
        })
    }

    fetchData(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }

}