import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleInputInterface } from "../../shared/types/articleInput.interface";
import { Observable, map } from "rxjs";
import { ArticleInterface } from "../../shared/types/article.interface";
import { environment } from "../../environment/environment";
import { SaveArticleResponseInterface } from "../../shared/types/saveArticleResponse.interface";

@Injectable()

export class CreateArticleService {

    constructor(private http: HttpClient) { }

    createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {

        const fullUrl = environment.apiUrl + "/articles"

        return this.http.post<SaveArticleResponseInterface>(fullUrl, { article: articleInput })
            .pipe(map((response: SaveArticleResponseInterface) => {
                return response.article
            }))
    }

}