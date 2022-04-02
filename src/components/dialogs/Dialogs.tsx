/** Components*/
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {addMessageInStateActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

/** Types*/
import React, {FC} from "react";
import {DialogsType} from "../../redux/dialogs-reducer";

type propsType = {
    dialogs: DialogsType,
    addNewMessage: () => void
    onChangeTextTextarea: (value: string) => void
}

const Dialogs: FC<propsType> = ({addNewMessage, onChangeTextTextarea, dialogs}) => {

    return (
        <div className='dialogs'>
            <Dialog dialogsUsers={dialogs.dialogsUsers}/>
            <Messages massagesUsers={dialogs.massagesUsers}
                      newMessageText={dialogs.newMessageText}
                      addNewMessage={addNewMessage}
                      onChangeTextTextarea={onChangeTextTextarea}/>
        </div>
    )
}

export {Dialogs};


