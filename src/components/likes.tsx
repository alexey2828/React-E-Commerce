import { Button } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { connect } from "react-redux";
import { ILikeState } from "../types/post";

interface ILikes {
    onDecrementLikes?: MouseEventHandler<HTMLButtonElement> | undefined;
    onImcrementLikes?: MouseEventHandler<HTMLButtonElement> | undefined;
    likes: {likes?: number, postId: number};
}

const Likes: FC<ILikes> = (likes: ILikes) => {
   
    //console.log('--->', likes)
    return (
        <div>
            <Button onClick={likes.onImcrementLikes}>like {JSON.stringify(likes.likes.likes)} </Button>
            <Button onClick={likes.onDecrementLikes}>disLike</Button>
        </div>
    )
}

export function mapStateToProps(state: any, likes: ILikes): ILikeState{
    return {
        likes: state.likes,
        postId: likes.likes.postId
    }

}
function mapDispatchToProps(dispatch: any) {
    return {
        onImcrementLikes: () => {
            const action = {type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementLikes: () => {
            const action = {type: 'DECREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);