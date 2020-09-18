import React, {Fragment} from "react";
import LogoutButton from "./Auth0/LogoutButton";

import { Link } from "react-router-dom";

export default function Navbar() {
    const [isActive, setisActive] = React.useState(false);
    return (
        <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/" className="navbar-item">
                        <img
                            src="https://i.imgur.com/9I88eKA.png"
                            alt="Logo"
                            width="auto"
                            height="auto"
                        />
                    </a>
                    <a
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}
                >
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to={"/private_profile"} >
                                <a className="navbar-item">Edit Profile</a>
                            </Link>
                            <Link to={"/public_profile"} >
                                <a className="navbar-item">Profile</a>
                            </Link>
                            <Link to={"/explore"}>
                                <a className="navbar-item">Deed</a>
                            </Link>
                            <Link to={"/deed_assigned"}>
                            <a className="navbar-item">Upcoming Deeds</a>
                            </Link>
                            <Link to={"/create_deed"}>
                            <a className="navbar-item">Create Deed+</a>
                            </Link>
                            <Link to={"/message"}>
                                <a className="navbar-item">Chat</a>
                            </Link>
                            <Link to={"/about"}>
                                <a className="navbar-item">About</a>
                            </Link>
                            {/* <div class="buttons"> */}
                            {/* <a class="button is-light">{<LogoutButton />}</a> */}
                            <LogoutButton />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}