import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionTypes } from "../../types/post"

interface IFetchUsers {
    url: string;
}

export const fetchUsers = ({url}: IFetchUsers) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({type: ActionTypes.FETCH});
            const response = await axios.get(url);
            dispatch({type: ActionTypes.FETCH_SUCCESS, payload: response.data});
        } catch(e) {
            dispatch({type: ActionTypes.FETCH_ERROR, payload: 'error users :/'});
        }
    }
}