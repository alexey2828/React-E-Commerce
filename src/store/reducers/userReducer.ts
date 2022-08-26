import { IUserState, Action, ActionTypes } from "../../types/post"

const initalState: IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initalState, action: Action): IUserState => {
    switch (action.type) {
        case ActionTypes.FETCH:
            return {loading: true, error: null, users: []}
        case ActionTypes.FETCH_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case ActionTypes.FETCH_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}