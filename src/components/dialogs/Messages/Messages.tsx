import {FC} from "react";

interface massagesUsers {
    id: number,
    message: string
}

type Props = {
    massagesUsers: massagesUsers[]
}

const Messages: FC<Props> = ({massagesUsers}) => {
    let messages = massagesUsers.map((el) => {
        return (
        <div className="user__message" key={el.id}>
            {el.message}
        </div> )
    })

    return (
        <div className="messages__users">
            {messages}
        </div>
    )
}

export {Messages};
