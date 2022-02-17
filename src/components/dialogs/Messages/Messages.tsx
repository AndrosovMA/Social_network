import {FC} from "react";
import {MassagesUsersType} from "../../../redux/state";

type Props = {
    massagesUsers: MassagesUsersType[]
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
