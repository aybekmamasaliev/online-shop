import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { PopularTagType } from "../../../types/popularTag.type";
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";

@Injectable()

export class PopularTagsService {
    constructor(private http: HttpClient) { }

    getPopularTags(): Observable<PopularTagType[]> {
        const url = environment.apiUrl + '/tags'
        return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
            map((respose: GetPopularTagsResponseInterface) => {
                return respose.tags;
            })
        )
    }
}