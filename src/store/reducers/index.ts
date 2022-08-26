import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    likes: likeReducer,
    post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>