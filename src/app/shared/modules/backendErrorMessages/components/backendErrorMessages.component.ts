import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorInterface } from "../../../types/backendErrorsInterface.interface";

@Component({
    selector: "mc-backend-error-messages",
    templateUrl: './backendErrorMessages.component.html',
    styleUrls: ['./backendErrorMessages.component.css']
})


export class BackendErrorMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: any;

    errorMessages: string[]

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
            const messages = this.backendErrorsProps[name].join(', ')
            return `${name} ${messages}`
        })
    }
}

