import {NavLink} from "react-router-dom";
import {FC} from "react";
import {DialogsUsersType} from "../../../redux/state";

type Props = {
    dialogsUsers: Array<DialogsUsersType>;
}

const Dialog: FC<Props> = ({dialogsUsers}) => {

    let dialogs = dialogsUsers.map((el) => {
        return (
        <div key={el.id} className="user__name">
            <NavLink to={String(el.id)}>{el.user}</NavLink>
        </div> )
    })

    return (
        <div className="dialogs__users">
            {dialogs}
        </div>
    )
}
export {Dialog};


