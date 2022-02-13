import {NavLink} from "react-router-dom";
import {FC} from "react";


interface dialogsUsers {
    id: number,
    user: string
}

type Props = {
    dialogsUsers: dialogsUsers[]
}



const  Dialog:FC<Props> = ({dialogsUsers}) => {
    return (
        <div className="dialogs__users">
            {dialogsUsers[0]["user"]}
            <div className="user__name active">
                <NavLink to='1'>Max</NavLink>
            </div>
            <div className="user__name">
                <NavLink to='2'>Ivan</NavLink>
            </div>
            <div className="user__name">
                <NavLink to='3'>Georgy</NavLink>
            </div>
            <div className="user__name">
                <NavLink to='4'>Olga</NavLink>
            </div>
        </div>
    )
}

export {Dialog};