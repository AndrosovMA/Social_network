import React from "react";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><NavLink to="Profile">Profile</NavLink></li>
                <li><NavLink to="Dialogs">Massage</NavLink></li>
                <li><NavLink to="News">News</NavLink></li>
                <li><NavLink to="Music">Music</NavLink></li>
                <li><NavLink to="Settings">Settings</NavLink></li>
                <li><NavLink to="Users">Users</NavLink></li>
            </ul>
        </nav>
    )
}