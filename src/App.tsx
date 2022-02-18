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

/** TypeScript - React*/
import {FC} from "react";
import {State} from "./redux/state";


type Props = {
    stateProp: State
}

const App: FC<Props> = (stateProp) => {

    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Navbar/>

                <Routes>
                    <Route path="/Profile" element={<Profile profile={stateProp.stateProp.profile}/>}/>
                    <Route path="/Dialogs" element={<Dialogs dialogs={stateProp.stateProp.dialogs}/>}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
