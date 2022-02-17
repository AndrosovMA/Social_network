import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {DialogsType} from "../../redux/state";
import {FC} from "react";


type propsType = {
    dialogs: DialogsType,
}

const Dialogs: FC<propsType> = (dialogs) => {

    return (
        <div className='dialogs'>
            <Dialog dialogsUsers={dialogs.dialogs.dialogsUsers}/>
            <Messages massagesUsers={dialogs.dialogs.massagesUsers}/>
        </div>
    )
}

export {Dialogs};


