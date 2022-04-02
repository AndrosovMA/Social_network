/** React*/
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/** Main components*/
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";

/** Navigation components*/
import {Profile} from "./components/profile/Profile";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsContainer} from "./components/dialogs/DialogsConteiner";

/** Types*/
import {FC} from "react";
import {StoreType} from "./redux/redux-store";

type PropsType = {
    store: StoreType
}

const App: FC<PropsType> = ({store}) => {

    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Navbar/>

                <Routes>
                    <Route path="/Profile" element={<Profile store={store}/>}/>
                    <Route path="/Dialogs" element={<DialogsContainer store={store}/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

