import { RouterState } from "@ngrx/router-store"
import { SaladState } from "../salad/store/salad.reducer"
import { AppState } from "../store/app.reducer"

export type StoreState = {
    app: AppState,
    salad: SaladState,
    router: RouterState
}