import { mapStateToProps } from "../../components/likes";
import { ILikeState } from "../../types/post";

const initalState: ILikeState = {
    postId: 0,
    likes: 0
}

export const likeReducer = (state = mapStateToProps, action: any): ILikeState => {
    console.log('>>>', state);

    switch(action.type){
        case 'INCREMENT': 
            return {
                ...state, likes: state.likes + 1
            }
        case 'DECREMENT': 
            return {
                ...state, likes: state.likes - 1
            }
        default: 
            return state;
    }
}