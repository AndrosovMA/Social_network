/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import {MyPost} from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

/** Types*/
import {ProfileType} from "../../redux/state";
import {FC} from "react";


type Props = {
    profile: ProfileType
    dispatch: (acton: any) => void
}

const Profile: FC<Props> = (profile) => {

    return (
        <div className='profile'>
            <img className='profile__img' src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost post={profile.profile.posts}
                    newPostText={profile.profile.newPostText}
                    dispatch={profile.dispatch}
            />
        </div>
    )
}

export {Profile}