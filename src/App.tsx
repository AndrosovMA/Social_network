/** React*/
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/** Main components*/
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";

/** Navigation components*/
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";

/** Types*/
import {FC} from "react";
import {StoreType} from "./redux/redux-store";
type PropsType = {
    store: StoreType
}


const App: FC<PropsType> = (props) => {

    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Navbar/>

                <Routes>
                    <Route path="/Profile" element={<Profile profile={props.store.getState().profileReducer}
                                                             dispatch={props.store.dispatch}/>}
                    />
                    <Route path="/Dialogs" element={<Dialogs dialogs={props.store.getState().dialogsReducer}
                                                             dispatch={props.store.dispatch}/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;


// type PropsApp = {
//     store: StoreType
//     state: StateType
//     dispatch: Dispatch<Action>
// }