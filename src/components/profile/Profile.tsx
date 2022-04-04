/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostContainer} from "./my_post/MyPostContainer";

const Profile = () => {

    return (
        <div className='profile'>
            <img className='profile__img' src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}

export {Profile}
