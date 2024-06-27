import { Component, Input, OnInit } from "@angular/core";
import { UtilsSercvice } from "../../../../services/utils.service";

@Component({
    selector: "mc-pagination",
    templateUrl: "pagination.component.html",
    styleUrls: ["./pagination.component.css"]
})

export class PaginationComponent implements OnInit {

    @Input("total") totalProps: any
    @Input("limit") limitProps: number
    @Input("currentPage") currentPageProps: number
    @Input("url") urlProps: string

    pagesCount: number

    pages: number[];

    constructor(private utilsService: UtilsSercvice) { }

    ngOnInit(): void {
        this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
        this.pages = this.utilsService.range(1, this.pagesCount)
        console.log(this.pages)
        console.log("ok")
    }
}