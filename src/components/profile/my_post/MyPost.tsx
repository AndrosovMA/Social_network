import Post from "./post/Post";
import React, {FC} from "react";
import {PostType} from "../../../redux/state";

type Props = {
    post: PostType[],
    newPostText: string,
    addPostInState: (message:string) => void,
    updateNewPostText: (value:string) => void
}

const MyPost: FC<Props> = (post) => {

    let posts = post.post.map((el) => {
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
            post.addPostInState(getTextareaValue)
            getRefTextarea.current.value = ''; //перенести в бизнес логику
        }
    };

    const handlerTextarea = () => {
        if (getRefTextarea.current?.value !== undefined) {
            let getTextareaValue = getRefTextarea.current?.value;
            post.updateNewPostText(getTextareaValue);
        }
    }

    return (
        <div className="profile__post">
            <h3>My post:</h3>
            <div>
                <textarea placeholder='Введите текст'
                          value={post.newPostText}
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

