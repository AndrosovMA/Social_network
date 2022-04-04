import {MyPost} from "./MyPost";
import {connect} from "react-redux";

/** action creator - conception Redux*/
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {addPostInStateActionCreator} from "../../../redux/profile-reducer";

/** Types*/
import {DispatchType, StateType} from "../../../redux/redux-store";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (value: string) => {
            dispatch(addPostInStateActionCreator(value))
        },
        changeTextarea: (value: string) => {
            dispatch(updateNewPostTextActionCreator(value))
        }
    }
};

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);