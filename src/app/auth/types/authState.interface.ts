import { BackendErrorInterface } from "../../shared/types/backendErrorsInterface.interface"
import { CurrentUserInterface } from "../../shared/types/currentUser.interface"

export interface AuthStateInterface {
    isSubmitting: boolean
    isLoading : boolean
    currentUser: CurrentUserInterface | null
    isLogedIn: boolean | null
    validationErrors:BackendErrorInterface | null
}