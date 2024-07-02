import { BackendErrorInterface } from "../../shared/types/backendErrorsInterface.interface"
import { ArticleInterface } from "../../shared/types/article.interface"

export interface EditArticleStateInterface{
    isLoading:boolean
    article:ArticleInterface | null
    isSubmitting:boolean
    validationErrors: BackendErrorInterface | null
}