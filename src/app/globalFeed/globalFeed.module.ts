import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GlobalFeedComponent } from "./components/globalFeed/globalFeed.component";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { PopularTagsComponent } from "../shared/modules/popularTags/components/popularTags/popularTags.component";
import { PopularTagsModule } from "../shared/modules/popularTags/popularTags.module";

const routes = [
    {
        path: '',
        component: GlobalFeedComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule],
    declarations: [GlobalFeedComponent]
})

export class GlobalFeedModule {

}