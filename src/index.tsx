/** React*/
import React from 'react';
import ReactDOM from "react-dom";

/** CSS*/
import './scss/index.scss';

/** Data information*/
import {state} from "./redux/state";
import {addPostInState, updateNewPostText, DialogsType, ProfileType} from "./redux/state";
import {subscribe} from "./redux/state";

/** Components*/
import App from "./App";


type State = {
    profile: ProfileType,
    dialogs: DialogsType,
}

const RerenderEntireTree = (state: State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateProp={state} addPostInState={addPostInState}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
RerenderEntireTree(state);

subscribe(RerenderEntireTree);



export {RerenderEntireTree}










