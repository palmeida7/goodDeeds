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
                    <p
                        
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
                    </p>
                </div>
                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}
                >
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to={"/private_profile"}
                                className="navbar-item">Edit Profile
                            </Link>
                            <Link to={"/explore"}
                                className="navbar-item">Explore
                            </Link>
                            <Link to={"/deeds_list"}
                            className="navbar-item">My Deeds
                            </Link>
                            <Link to={"/create_deed"}
                                className="navbar-item">Create Deed+
                            </Link>
                            <Link to={"/message"}
                                className="navbar-item">Chat
                            </Link>
                            <Link to={"/about"}
                                className="navbar-item">About
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}