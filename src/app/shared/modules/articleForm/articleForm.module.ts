import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";  
import { ArticleFormComponent} from "../articleForm/components/articleForm/articleForm.component"
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrormessagesModule } from "../backendErrorMessages/backendErrorMessages.module";


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, BackendErrormessagesModule],
    declarations: [ArticleFormComponent],
    exports:[ArticleFormComponent]
})

export class ArticleFormModule {

}