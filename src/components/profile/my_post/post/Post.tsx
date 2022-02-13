import postImg from '../../../../img/post.png'
import React, {FC} from "react";

type postProps = {
    message: string;
    likeCount: number;
}

const Post:FC<postProps> = ({message, likeCount}) => {

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


