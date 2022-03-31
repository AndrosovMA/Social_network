/** Components*/
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";

/** Types*/
import {Dispatch, FC} from "react";
import {DialogsType} from "../../redux/dialogs-reducer";
type ActionType = {
    type: string
    value?: string
}
type propsType = {
    dialogs: DialogsType,
    dispatch: Dispatch<ActionType>
}

const Dialogs: FC<propsType> = (props) => {

    return (
        <div className='dialogs'>
            <Dialog dialogsUsers={props.dialogs.dialogsUsers}/>
            <Messages massagesUsers={props.dialogs.massagesUsers}
                      newMessageText = {props.dialogs.newMessageText}
                      dispatch={props.dispatch}/>
        </div>
    )
}

export {Dialogs};


