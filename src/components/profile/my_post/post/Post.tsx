import postImg from '../../../../img/post.png'
import React from "react";

type postProps = {
    message: string;
    likeCount: number;
}

const Post = ({message, likeCount}: postProps) => {
    return (
        <>
            <div className="post__get">
                <img src={postImg} alt=""/>
                <div className="massage">
                    {message}
                </div>

            </div>
            <div className="like">
                like {likeCount}
            </div>
        </>
    )
}

export default Post;