import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followStatus} from "../../redux/users-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        users: state.userReducer.users
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        changeFollowStatus: (id: string) => {
            dispatch(followStatus(id))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);