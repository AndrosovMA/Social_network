import Post from "./post/Post";
import React, {FC} from "react";

/** action creator - conception Redux*/
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {addPostInStateActionCreator} from "../../../redux/profile-reducer";

/** Types*/
type ActionType = {
    type: string
    value?: string
}
type PostType = {
    id: number
    message: string | undefined
    likeCount: number
}
type PropsType = {
    posts: PostType[],
    newPostText: string | undefined,
    dispatch:(action:ActionType) => void
}

const MyPost: FC<PropsType> = (props) => {

    let posts = props.posts.map((el) => {
        return (
            <div key={el.id}>
                <Post message={el.message} likeCount={el.likeCount}/>
            </div>
        )
    });
    let getRefTextarea = React.createRef<HTMLTextAreaElement>()

    const handlerClick = () => {
        if (getRefTextarea.current?.value !== undefined) {
            let getTextareaValue = getRefTextarea.current?.value;
            props.dispatch(addPostInStateActionCreator(getTextareaValue))
        }
    };
    const handlerTextarea = () => {
        if (getRefTextarea.current?.value !== undefined) {
            let getTextareaValue = getRefTextarea.current?.value;
            props.dispatch(updateNewPostTextActionCreator(getTextareaValue));
        }
    }

    return (
        <div className="profile__post">
            <h3>My post:</h3>
            <div>
                <textarea placeholder='Введите текст'
                          value={props.newPostText}
                          onChange={handlerTextarea}
                          ref={getRefTextarea}/>
            </div>
            <div>
                <input type={"button"} onClick={handlerClick} value='add post'/>
            </div>
            {posts}
        </div>
    )
}

export {MyPost};

