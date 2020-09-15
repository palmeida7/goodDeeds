import React from "react";
import LogoutButton from "./Auth0/LogoutButton";

export default function Navbar() {
	const [isActive, setisActive] = React.useState(false);
    return (
        <>
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
				<div class="navbar-end">
					<div class="navbar-item">
						<a class="navbar-item">Profile</a>
						<a class="navbar-item">Deed</a>
						<a class="navbar-item">Upcoming Deeds</a>
						<a class="navbar-item">Create Deed+</a>
						<a class="navbar-item">Messages</a>
						{/* <div class="buttons"> */}
							{/* <a class="button is-light">{<LogoutButton />}</a> */}
                            <LogoutButton/>
						{/* </div> */}
					</div>
				</div>
			</div>
		</nav>
        </>
	);
}