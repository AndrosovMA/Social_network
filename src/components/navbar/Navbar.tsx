import React from "react";
import {Link, NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><NavLink to="Profile">Profile</NavLink></li>
                <li><NavLink to="Dialogs">Massage</NavLink></li>
                <li><NavLink to="News">News</NavLink></li>
                <li><NavLink to="Music">Music</NavLink></li>
                <li><NavLink to="Settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}