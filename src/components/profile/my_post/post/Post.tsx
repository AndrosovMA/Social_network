import postImg from '../../../../img/post.png'
import React, {FC} from "react";

type Props = {
    message: string;
    likeCount: number;
}

const Post: FC<Props> = ({message, likeCount}) => {

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


