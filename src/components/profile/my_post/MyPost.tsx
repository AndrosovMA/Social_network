import {Post} from "./post/Post";
import React, {FC} from "react";


/** Types*/
type PostType = {
    id: number
    message: string | undefined
    likeCount: number
}
type PropsType = {
  posts: PostType[],
  newPostText: string | undefined
  addPost: (value:string) => void
  changeTextarea: (value:string) => void

}

const MyPost: FC<PropsType> = ({posts, newPostText, addPost, changeTextarea}) => {

    const myPosts = posts.map((el:any) => {
        return (
            <div key={el.id}>
                <Post message={el.message} likeCount={el.likeCount}/>
            </div>
        )
    });
    const getRefTextarea = React.createRef<HTMLTextAreaElement>()
    const handlerClick = () => {
        if (getRefTextarea.current?.value !== undefined) {
            let getTextareaValue = getRefTextarea.current?.value;
            addPost(getTextareaValue)
        }
    };
    const handlerTextarea = () => {
        if (getRefTextarea.current?.value !== undefined) {
            let getTextareaValue = getRefTextarea.current?.value;
            changeTextarea(getTextareaValue);
        }
    }

    return (
        <div className="profile__post">
            <h3>My post:</h3>
            <div>
                <textarea placeholder='Введите текст'
                          value={newPostText}
                          onChange={handlerTextarea}
                          ref={getRefTextarea}/>
            </div>
            <div>
                <input type={"button"} onClick={handlerClick} value='add post'/>
            </div>
            {myPosts}
        </div>
    )
}

export {MyPost};
