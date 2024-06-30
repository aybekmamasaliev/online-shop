import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errormessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleComponent } from "./components/article/article.component"
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { TagLiastModule } from '../shared/modules/tagList/tagList.module';


const routes = [
  {
    path:"articles/:slug",
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagLiastModule
  ],
  exports: [],
  providers: [SharedArticleService]
})
export class ArticleModule { }
