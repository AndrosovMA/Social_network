import avatar from '../../img/ava.jpg'

import content_img from '../../img/content.jpg'
import {MyPost} from "./my_post/MyPost";

export function Profile() {
    return (
        <div className='profile'>
            <img className='profile__img'  src={content_img} alt=""/>

            <div className="profile__user">
                <div className="user__avatar">
                    <img src={avatar} alt=""/>
                </div>
                 <div className="user__descriptions">
                    <div> LogicalThinker</div>
                    <div> Web Developer</div>
                    <div> Frontend</div>
                    <div> Sankt-Peterburg</div>
                 </div>
            </div>

            <MyPost/>
        </div>
    )
}