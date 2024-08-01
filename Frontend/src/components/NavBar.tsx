
import { NavLink } from 'react-router-dom';
import '../CSS/NavBar.css'
import {FaBars} from 'react-icons/fa'

function NavBar() {
    function handelActive({isActive}){
        return isActive?'activeLink':'navLink';
    }
    return (
        <div className="navbar">
            <h1 className="logo">JobSphere</h1>
            <div>
                <ul className="tabs">
                    <NavLink className={handelActive} to={'/'}>Home</NavLink>
                    <li className="li ">|</li>
                    <NavLink className={handelActive} to={'/jobs'} >Jobs</NavLink>
                    <li className="li ">|</li>
                    <NavLink className={handelActive} to={'/addJobs'}>Add Jobs</NavLink>
                </ul>
                <div className="slideMenu">
                    <details>
                        <summary><FaBars/></summary>
                        <ul className="tabsSmall">
                            <li><NavLink className={handelActive} to={'/'}>Home</NavLink></li>
                            <li><NavLink className={handelActive} to={'/jobs'} >Jobs</NavLink></li>
                            <li><NavLink className={handelActive} to={'/addJobs'}>Add Jobs</NavLink></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
