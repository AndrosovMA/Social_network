import {Post} from "./post/Post";

export function MyPost() {
    return (
        <div className="profile__post">
            My post
            <div>
                <textarea>Введите текс сообщения </textarea>
            </div>
            <div>
                <input className='' type={"button"} value='add post'/>
            </div>

            New post:
            <Post/>
            <Post/>
        </div>
    )
}