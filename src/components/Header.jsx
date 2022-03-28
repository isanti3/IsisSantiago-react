import * as React from "react";
import { NavLink } from "react-router-dom";

/* Call page structure */
export default function App() { 

    let activeClassName = "activelink"

    return (
        <header>
            <h1><NavLink to="/">Portfolio</NavLink></h1>

            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about"
                            className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projects"
                            className={({ isActive }) => isActive ? activeClassName : undefined}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => isActive ? activeClassName : undefined}
                            >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}