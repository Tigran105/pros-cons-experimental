export enum ExampleActionType {
    FETCH_EXAMPLE = "FETCH_EXAMPLE",
    FETCH_EXAMPLE_SUCCESS = "FETCH_EXAMPLE_SUCCESS",
    FETCH_EXAMPLE_ERROR = "FETCH_EXAMPLE_ERROR"
}

export interface ExampleState {
    example: any[]
    loading: boolean
    error: null | string
}

interface FetchExamplesAction {
    type: ExampleActionType.FETCH_EXAMPLE
}

interface FetchExamplesSuccessAction {
    type: ExampleActionType.FETCH_EXAMPLE_SUCCESS,
    payload: any[]
}

interface FetchExamplesErrorAction {
    type: ExampleActionType.FETCH_EXAMPLE_ERROR,
    payload: string
}

export type ExampleAction = FetchExamplesAction | FetchExamplesSuccessAction | FetchExamplesErrorAction