/** React*/
import React from 'react';
import ReactDOM from "react-dom";

/** CSS*/
import './scss/index.scss';

/** Data information*/
import {store} from "./redux/redux-store";

/** Components*/
import App from "./App";

/** Types*/
import {StoreType} from "./redux/redux-store";


const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store);

// store.subscribe(rerenderEntireTree); // redux store когда уведомляет подписчиков не передает им state, перепишем subscribe:
store.subscribe(() => {
    rerenderEntireTree(store)
})




