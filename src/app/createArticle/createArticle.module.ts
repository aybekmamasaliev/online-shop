import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateArticleComponent } from "./components/createArticle/createArticle.component";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";


const routes = [
    {
        path: "articles/new",
        component: CreateArticleComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
    declarations: [CreateArticleComponent]
})

export class CreateArticleModule {

}