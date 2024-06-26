import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../errorMessage/errormessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagLiastModule } from '../tagList/tagList.module';
import { PopularTagsModule } from '../popularTags/popularTags.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),

    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagLiastModule,
    PopularTagsModule
  ],
  exports: [FeedComponent],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
