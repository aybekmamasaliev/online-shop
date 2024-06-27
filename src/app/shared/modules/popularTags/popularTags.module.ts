import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PopularTagsComponent } from "./components/popularTags/popularTags.component";
import { PopularTagsService } from "./services/popularTags.service";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { RouterModule } from "@angular/router";
import { LoadingModule } from "../loading/loading.module";
import { ErrorMessageModule } from "../errorMessage/errormessage.module";

@NgModule({
    imports: [CommonModule, StoreModule.forFeature("popularTags", reducers),
        EffectsModule.forFeature([GetPopularTagsEffect]),
        RouterModule,
        LoadingModule,
        ErrorMessageModule
    ],
    declarations: [PopularTagsComponent],
    exports: [PopularTagsComponent],
    providers: [PopularTagsService]
})

export class PopularTagsModule {

}








