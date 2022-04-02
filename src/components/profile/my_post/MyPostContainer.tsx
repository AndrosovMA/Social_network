import React, {FC} from "react";
import { MyPost } from "./MyPost";

/** action creator - conception Redux*/
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {addPostInStateActionCreator} from "../../../redux/profile-reducer";

/** Types*/
import {StoreType} from "../../../redux/redux-store";
type PropsType = {
    store: StoreType
}

const MyPostContainer: FC<PropsType> = ({store}) => {

    const addPost = (value: string) => {
        store.dispatch(addPostInStateActionCreator(value))

    };
    const changeTextarea = (value: string) => {
        store.dispatch(updateNewPostTextActionCreator(value));
    }

    return (
        <MyPost posts={store.getState().profileReducer.posts}
                newPostText={store.getState().profileReducer.newPostText}
                addPost={addPost}
                changeTextarea={changeTextarea}/>
    )
}

export {MyPostContainer};

