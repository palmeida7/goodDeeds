import React from "react";
import { Link } from "react-router-dom";

export default function MiniProfile({ usersInfo }) {
    return (
        <div className="container">
            <article className="media">
                <Link to={`/public_profile/${window.sessionStorage.getItem('email')}`}>
                    <figure className="image is-48x48">
                        <img
                            className="is-rounded"
                            src={window.sessionStorage.getItem('picture')}
                            alt="owners profile"
                        />
                    </figure>
                </Link>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <span href="../screens/Public_Profile.js"><strong>{usersInfo.name}</strong> <br /></span>
                            <small>@{usersInfo.username}</small>{" "}
                            <span className="tag is-success is-normal">Rating</span>{" "}
                            <small>100%</small>
                            <br />
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}