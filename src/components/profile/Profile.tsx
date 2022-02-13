import avatar from '../../img/ava.jpg'

import content_img from '../../img/content.jpg'
import MyPost from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className='profile'>
            <img className='profile__img'  src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}