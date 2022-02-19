/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import MyPost from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

/** Types*/
import {ProfileType} from "../../redux/state";
import {FC} from "react";


type Props = {
    profile: ProfileType
    addPostInState: (message:string) => void
}

const Profile: FC<Props> = (profile) => {

    return (
        <div className='profile'>
            <img className='profile__img'  src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost post={profile.profile.posts} addPostInState={profile.addPostInState}/>
        </div>
    )
}

export {Profile}