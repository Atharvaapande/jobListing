import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import '../CSS/NavBar.css'

export function NavBar(){
    return (
        <>
            <header>
                <div>
                <h1 className="logo">JobSphere</h1>
                <nav>
                    <details>
                        <summary>
                            <FaBars/>
                        </summary>
                        <ul>
                            <li className="navTabs"><NavLink className={({isActive})=> isActive?"activeNavLink":"nav-link"} to="/">Home</NavLink></li>
                            <li className="navTabs">|</li>
                            <li className="navTabs"><NavLink className={({isActive})=> isActive?"activeNavLink":"nav-link"} to="/jobs">Jobs</NavLink></li>
                            <li className="navTabs">|</li>
                            <li className="navTabs"><NavLink className={({isActive})=> isActive?"activeNavLink":"nav-link"} to="/addJobs">Add Jobs</NavLink></li>
                        </ul>
                    </details>
                </nav>
                </div>
            </header>
        </>
    )
}