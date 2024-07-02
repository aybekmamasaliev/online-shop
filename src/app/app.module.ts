import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environment/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { EditArticleModule } from './editArticle/editArticle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TopBarModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Количество сохраненных состояний
      logOnly: environment.production
    }),

    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    
  ],
  providers: [
    PersistanceService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
