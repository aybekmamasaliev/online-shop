import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "mc-tag-feed",
    templateUrl: "./tagFeed.component.html",
    styleUrls: ["./tagFeed.component.css"]
})

export class TagFeedComponent implements OnInit {

    tagName: string | null

    apiUrl: string

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {
            console.log("params in tagFeed", params)
            this.tagName = params['slug']
            this.apiUrl = `/articles?tag=${this.tagName}`
        })
    }
}