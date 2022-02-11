/** React*/
import React from 'react';

/** Main components*/
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";

/** Navigation components*/
//

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
