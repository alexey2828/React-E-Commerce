export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string | undefined;
}

export interface IPostState {
    posts: any[];
    loading: boolean;
    error: null | string | undefined;
}

export interface ILikeState {
    postId: number;
    likes: number;
}

export enum ActionTypes {
    FETCH = 'FETCH',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
}

interface FetchAction {
    type: ActionTypes.FETCH;
}

interface FetchSuccessAction<T> {
    type: ActionTypes.FETCH_SUCCESS;
    payload?: T | null;
}

interface FetchErrorAction {
    type: ActionTypes.FETCH_ERROR;
    payload?: string;
}

export type Action = FetchAction | FetchSuccessAction<any> | FetchErrorAction
