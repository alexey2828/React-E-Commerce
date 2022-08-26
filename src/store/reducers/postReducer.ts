import { Action, ActionTypes, IPostState } from "../../types/post"

const initalState: IPostState = {
    posts: [],
    loading: false,
    error: null
}

export const postReducer = (state = initalState, action: Action): IPostState => {
    switch (action.type) {
        case ActionTypes.FETCH:
            return {loading: true, error: null, posts: []}
        case ActionTypes.FETCH_SUCCESS:
            return {loading: false, error: null, posts: action.payload}
        case ActionTypes.FETCH_ERROR:
            return {loading: false, error: action.payload, posts: []}
        default:
            return state;
    }
}