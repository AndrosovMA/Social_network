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
                                                             updateNewPostText={store.store.updateNewPostText.bind(store.store)}
                                                             addPostInState={store.store.addPostInState.bind(store.store)}/>}/>
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





// import {State} from "./redux/state";

// type Props = {
//     stateProp: State
//     addPostInState: (message:string) => void
//     updateNewPostText: (value:string) => void
// }


// <Route path="/Profile" element={<Profile profile={stateProp.stateProp.profile}
//                                          updateNewPostText={stateProp.updateNewPostText}
//                                          addPostInState={stateProp.addPostInState}/>}/>
// <Route path="/Dialogs" element={<Dialogs dialogs={stateProp.stateProp.dialogs}/>}/>