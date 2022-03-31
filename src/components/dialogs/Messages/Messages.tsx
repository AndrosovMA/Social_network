import React, {FC} from "react";
import {addMessageInStateActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

/** Types*/
type ActionType = {
    type: string
    value?: string
}
type MassagesUsersType = {
    id: number,
    message: string | undefined,
}
type Props = {
    massagesUsers: MassagesUsersType[],
    newMessageText: string | undefined,
    dispatch: (action: ActionType) => void
}

const Messages: FC<Props> = ({massagesUsers, newMessageText, dispatch}) => {
    let messages = massagesUsers.map((el) => {
        return (
            <div className="user__message" key={el.id}>
                {el.message}
            </div>)
    })
    const changeTextTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(event.currentTarget.value))
    };
    const addNewMessage = () => {
        dispatch(addMessageInStateActionCreator())
    }
    return (

        <div className="messages__users">
            {messages}

            <textarea value={newMessageText} onChange={changeTextTextarea}>

            </textarea>
            <div>
                <input type="button" value='add massage' onClick={addNewMessage}/>
            </div>
        </div>


    )
}

export {Messages};
