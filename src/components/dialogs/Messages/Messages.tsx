import React, {FC} from "react";

/** Types*/
type MassagesUsersType = {
    id: number,
    message: string | undefined,
}
type Props = {
    massagesUsers: MassagesUsersType[]
    newMessageText: string | undefined
    addNewMessage: () => void
    onChangeTextTextarea: (value: string) => void
}

const Messages: FC<Props> = ({
                                 massagesUsers,
                                 newMessageText,
                                 addNewMessage,
                                 onChangeTextTextarea
                             }) => {
    const messages = massagesUsers.map((el) => {
        return (
            <div className="user__message" key={el.id}>
                {el.message}
            </div>)
    })
    const changeTextTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeTextTextarea(event.currentTarget.value)
    };

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
