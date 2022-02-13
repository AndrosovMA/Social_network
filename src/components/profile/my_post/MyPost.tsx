import Post from "./post/Post";
import React from "react";

const posts = [
    {id: 1, message: 'Learn TypeScript', likeCount: 34},
    {id: 2, message: 'TypeScript no hard', likeCount: 3},
];

const MyPost = () => {
    let post = posts.map((el) => {
        return (
            <div key={el.id}>
                <Post message={el.message} likeCount={el.likeCount}/>
            </div>
        )
    })

    return (
        <div className="profile__post">
            <h3>My post:</h3>
            <div>
                {/*<textarea name='message' value='message' onChange={handleChenge}>Введите текс сообщения </textarea>*/}
                <input type="text"/>
            </div>
            <div>
                <input className='' type={"button"} value='add post'/>
            </div>
            {post}
        </div>
    )
}

export default MyPost;