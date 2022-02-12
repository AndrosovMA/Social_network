import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className='dialogs'>

            <div className="dialogs__users">
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


            <div className="messages__users">
                <div className="user__message">
                    happy coding
                </div>
                <div className="user__message">
                    and good hacking
                </div>
            </div>

         </div>
    )
}

export {Dialogs};