/** React*/
import React from 'react';
import ReactDOM from "react-dom";

/** CSS*/
import './scss/index.scss';

/** Data information*/
import {store} from "./redux/state";

/** Components and Type*/
import App from "./App";
import {Store} from "./redux/state";


const RerenderEntireTree = (store: Store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
RerenderEntireTree(store);

store.subscribe(RerenderEntireTree);




