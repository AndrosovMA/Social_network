import {connect} from "react-redux";

/** Components*/
import {addMessageInStateActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

/** Types*/
import {Dialogs} from "./Dialogs";
import {DispatchType, StateType} from "../../redux/redux-store";


const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageInStateActionCreator())
        },
        onChangeTextTextarea: (value: string) => {
            dispatch(updateNewMessageTextActionCreator(value))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)