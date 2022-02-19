/** React*/
import ReactDOM from "react-dom";
import React from "react";

/** Components*/
import App from "./App";

import {addPostInState, updateNewPostText, DialogsType, ProfileType} from "./redux/state";

type State = {
    profile: ProfileType,
    dialogs: DialogsType,
}

const RerenderEntireTree= (state:State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateProp={state} addPostInState={addPostInState}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export {RerenderEntireTree}