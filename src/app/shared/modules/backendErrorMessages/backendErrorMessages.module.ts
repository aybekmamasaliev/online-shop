import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMessagesComponent } from "./components/backendErrorMessages.component";

@NgModule({
    imports: [CommonModule],
    declarations:[BackendErrorMessagesComponent],
    exports:[BackendErrorMessagesComponent]
})

export class BackendErrormessagesModule{}