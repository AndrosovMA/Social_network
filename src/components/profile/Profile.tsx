/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import {MyPost} from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

/** Types*/
import {ProfileType, Action } from "../../redux/state";
import {FC} from "react";

type Props = {
    profile: ProfileType
    dispatch: (acton: Action) => void
}

const Profile: FC<Props> = (props) => {

    return (
        <div className='profile'>
            <img className='profile__img' src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPost post={props.profile.posts}
                    newPostText={props.profile.newPostText}
                    dispatch={props.dispatch}
            />
        </div>
    )
}

export {Profile}