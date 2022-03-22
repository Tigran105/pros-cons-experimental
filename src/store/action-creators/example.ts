import {ExampleAction, ExampleActionType} from "../../types/example";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchExample = () => {
    return async (dispatch: Dispatch<ExampleAction>) => {
        try {
            dispatch({
                type: ExampleActionType.FETCH_EXAMPLE
            })
            const response = await axios.get("https://EXAMPLE")
            dispatch({type: ExampleActionType.FETCH_EXAMPLE_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ExampleActionType.FETCH_EXAMPLE_ERROR, payload: "error"
            })
        }
    }
}