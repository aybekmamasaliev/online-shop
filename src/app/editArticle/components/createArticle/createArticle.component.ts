import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../../shared/types/articleInput.interface";
import { Observable } from "rxjs";
import { BackendErrorInterface } from "../../../shared/types/backendErrorsInterface.interface";
import { Store, select } from "@ngrx/store";
import { AppStateInterface } from "../../../shared/types/appState.interface";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { createArticleAction } from "../../store/actions/createArticle.action";

@Component({
    selector:"mc-create-article",
    templateUrl:"./createArticle.component.html"
})

export class CreateArticleComponent implements OnInit{


    initialValues:ArticleInputInterface = {
        title:"",
        description:"",
        body:"",
        tagList:[]
    }

    isSubmitting$:Observable<boolean>

    backendErrors$:Observable<BackendErrorInterface | null>

    constructor( private store: Store<AppStateInterface>){

    }


    onSubmit(articleInput:ArticleInputInterface):void{
        this.store.dispatch(createArticleAction({articleInput}))
        console.log("res", articleInput)
    }   

    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }
}