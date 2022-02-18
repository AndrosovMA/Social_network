import Post from "./post/Post";
import React, {FC} from "react";
import {PostType} from "../../../redux/state";

type Props = {
    post: PostType[],
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
        let getTextareaValue = getRefTextarea.current?.value;
        console.log(getTextareaValue)
    };

    return (
        <div className="profile__post">
            <h3>My post:</h3>
            <div>
                <textarea placeholder='Введите текст' ref={getRefTextarea}/>
            </div>
            <div>
                <input type={"button"} onClick={handlerClick} value='add post'/>
            </div>
            {posts}
        </div>
    )
}

export default MyPost;

