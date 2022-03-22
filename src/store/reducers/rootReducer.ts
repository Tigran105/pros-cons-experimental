import {combineReducers} from "redux";
import {exampleReducer} from "./exampleReducer";
import {prosConsReducer} from "./prosConsReducer";

export const rootReducer = combineReducers({
    example: exampleReducer,
    prosAndCons: prosConsReducer
})
export type RootState = ReturnType<typeof rootReducer>