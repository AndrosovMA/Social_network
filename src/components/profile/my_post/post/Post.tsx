import postImg from '../../../../img/post.png'
import React, {FC} from "react";

/** Types*/
type PropsType = {
    message: string | undefined;
    likeCount: number;
}

const Post: FC<PropsType> = ({message, likeCount}) => {

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


