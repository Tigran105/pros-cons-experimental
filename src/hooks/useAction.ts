import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import actionCreator from "../store/action-creators/index"

export const useActions = () => {
    const dispatch = useDispatch()
    // @ts-ignore
    return bindActionCreators(actionCreator, dispatch)
};