import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";
import { EffectsModule } from "@ngrx/effects";
import { UpdateArticleEffect } from "./store/effects/updateArticle.effect";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/effects/reducers";
import { EditArticleService } from "./services/editArticle.service";
import { ArticleService as SharedArticleServise } from "../shared/services/article.service";
import { GetArticleEffect } from "../article/store/effects/getArticle.effect";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { EditArticleComponent } from "./components/editArticle/editArticle.component"


const routes = [
    {
        path: 'articles/:slug/edit',
        component: EditArticleComponent
    }
]

@NgModule({
    imports: [CommonModule,
        ArticleFormModule,
        EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
        StoreModule.forFeature("editArticle", reducers),
        LoadingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EditArticleComponent],
    providers: [EditArticleService, SharedArticleServise]
})

export class EditArticleModule {

}