import {ExampleAction, ExampleActionType, ExampleState} from "../../types/example";

const initialState: ExampleState = {
    example: [],
    loading: false,
    error: null
}

export const exampleReducer = (state = initialState, action: ExampleAction): ExampleState => {
    switch (action.type) {
        case ExampleActionType.FETCH_EXAMPLE:
            return {
                loading: true,
                error: null,
                example: []
            }
        case ExampleActionType.FETCH_EXAMPLE_SUCCESS:
            return {
                loading: false,
                error: null,
                example: action.payload
            }
        case ExampleActionType.FETCH_EXAMPLE_ERROR:
            return {
                loading: false,
                error: action.payload,
                example: []
            }
        default:
            return state
    }
}