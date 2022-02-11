import postImg from '../../../../img/post.png'

export function Post() {
    return (
        <>
            <div className="post__get">
                <img src={postImg} alt=""/>
                <div className="massage">
                    post
                </div>

            </div>
            <div className="like">
                like
            </div>
        </>
    )
}