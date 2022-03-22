import {combineReducers} from "redux";
import {exampleReducer} from "./exampleReducer";

export const rootReducer = combineReducers({
    example: exampleReducer,
})
export type RootState = ReturnType<typeof rootReducer>