import { Component, Input, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../../../types/articleInput.interface";
import { BackendErrorInterface } from "../../../../types/backendErrorsInterface.interface";

@Component({
    selector:"mc-article-form",
    templateUrl:"./articleForm.component.html"
})

export class ArticleFormComponent implements OnInit{

    @Input('initialValues') initialValuesProps:ArticleInputInterface

    @Input('isSubmitting') isSubmittingProps:boolean

    @Input('errors') errorProps:BackendErrorInterface | null

    constructor(){}

    ngOnInit(): void {
        
    }
}