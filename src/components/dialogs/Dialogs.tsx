import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {Action, DialogsType} from "../../redux/state";
import {FC} from "react";


type propsType = {
    dialogs: DialogsType,
    dispatch: (acton: Action) => void
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


