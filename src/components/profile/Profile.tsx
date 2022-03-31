/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import {MyPost} from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

/** Types*/
import {Dispatch, FC} from "react";
import {ProfileType} from "../../redux/profile-reducer";
type ActionType = {
    type: string
    value?: string
}
type PropsType = {
    profile: ProfileType
    dispatch: Dispatch<ActionType>
}

const Profile: FC<PropsType> = (props) => {

    return (
        <div className='profile'>
            <img className='profile__img' src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost posts={props.profile.posts}
                    newPostText={props.profile.newPostText}
                    dispatch={props.dispatch}
            />
        </div>
    )
}

export {Profile}