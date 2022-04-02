/** Other*/
import content_img from '../../img/content.jpg'

/** Components*/
import {MyPost} from "./my_post/MyPost";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostContainer} from "./my_post/MyPostContainer";

/** Types*/
import {FC} from "react";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    store: StoreType
}

const Profile: FC<PropsType> = ({store}) => {

    return (
        <div className='profile'>
            <img className='profile__img' src={content_img} alt=""/>

            <ProfileInfo/>
            <MyPostContainer store={store}/>
        </div>
    )
}

export {Profile}
