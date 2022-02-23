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
import {Store} from "./redux/state";

type PropsApp = {
    store: Store
}

const App: FC<PropsApp> = (store) => {

    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Navbar/>

                <Routes>
                    <Route path="/Profile" element={<Profile profile={store.store.getState().profile}
                                                             dispatch={store.store.dispatch.bind(store.store)}/>}
                    />
                    <Route path="/Dialogs" element={<Dialogs dialogs={store.store.getState().dialogs}/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;


