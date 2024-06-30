import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";

@Injectable()

export class FeedService{
    constructor( private http: HttpClient){
    }
    getFeed(url:string) : Observable<GetFeedResponseInterface>{
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetFeedResponseInterface>(fullUrl)
    }
}   