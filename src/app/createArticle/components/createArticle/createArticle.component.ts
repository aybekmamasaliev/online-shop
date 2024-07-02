import { Component, OnInit } from "@angular/core";

@Component({
    selector:"mc-create-article",
    templateUrl:"./createArticle.component.html"
})

export class CreateArticleComponent implements OnInit{


    initialValues = {
        title:"Foo",
        description:"Bar",
        body:"Baz",
        tagList:["123"]
    }

    constructor(){}


    onSubmit(res:any):void{
        console.log("res", res)
    }   

    ngOnInit(): void {
        
    }
}