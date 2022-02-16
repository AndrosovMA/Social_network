import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {FC} from "react";
import {State} from "../../redux/state";


const Dialogs = (state: State) => {
    return (
        <div className='dialogs'>
            <Dialog dialogsUsers={state.dialogsUsers}/>
            <Messages massagesUsers={state.massagesUsers}/>
        </div>
    )
}

export {Dialogs};


















// const dialogsUsers = [
//     {id: 1, user: 'Max'},
//     {id: 2, user: 'Ivan'},
//     {id: 3, user: 'Georgy'},
//     {id: 4, user: 'Olga'},
// ];
//
// const massagesUsers = [
//     {id: 1, message: "happy coding"},
//     {id: 2, message: "good hacking"},
//     {id: 3, message: "i'm learn TS"},
//     {id: 4, message: "i'm learn react-router v.6"},
// ]