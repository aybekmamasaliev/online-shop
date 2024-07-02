import { BackendErrorInterface } from "../../shared/types/backendErrorsInterface.interface"

export interface CreateArticleStateInterface{
    isSubmitting:boolean
    validationErrors: BackendErrorInterface | null
}