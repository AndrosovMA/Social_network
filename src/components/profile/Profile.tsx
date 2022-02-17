import content_img from '../../img/content.jpg'
import MyPost from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";
import {FC} from "react";

type Props = {
    profile: ProfileType
}

const Profile: FC<Props> = (profile) => {

    return (
        <div className='profile'>
            <img className='profile__img'  src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost post={profile.profile.posts}/>
        </div>
    )
}

export {Profile}