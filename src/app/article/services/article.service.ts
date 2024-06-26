import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment/environment";

@Injectable()

export class ArticleService{
    constructor( private http: HttpClient){} 
    
    deleteArticle(slug:string):Observable<{}>{
    
    	const url = `${environment.apiUrl}/articles/${slug}`
    	
    	return this.http.delete<{}>(url)
    	
    }
}   
