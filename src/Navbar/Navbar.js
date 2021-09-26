import React from 'react';
import {FcCloseUpMode} from 'react-icons/fc';


class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboard"><FcCloseUpMode size ="2em" /> School Management System</a>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/students">Students</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/create-room">Teachers</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/create-category">Employees</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        )
    }
}

export default NavBar;