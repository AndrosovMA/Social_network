import {Post} from "./post/Post";
import React from "react";

export function MyPost() {
    // handleChenge(event) {
    //     console.log(event)
    //     event.preventDefault();
    // }

    return (
        <div className="profile__post">
            My post
            <div>
                {/*<textarea name='message' value='message' onChange={handleChenge}>Введите текс сообщения </textarea>*/}
                <input type="text"/>
            </div>
            <div>
                <input className='' type={"button"} value='add post'/>
            </div>

            New post:
            <Post message={'Learn TypeScript'}/>
            <Post message={'TypeScript no hard'}/>
        </div>
    )
}