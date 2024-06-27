import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { UtilsSercvice } from "../../services/utils.service";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[CommonModule, RouterModule],
    declarations:[PaginationComponent],
    exports:[PaginationComponent],
    providers:[UtilsSercvice]
})

export class PaginationModule {}