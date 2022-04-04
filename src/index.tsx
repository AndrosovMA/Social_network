/** React*/
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

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
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
})




