import React from "react";
export default function MiniProfile({usersInfo}) {
    return (
        <div className="container">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
                        <img
                            className="is-rounded"
                            src={usersInfo.picture}
                        />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href="../screens/Public_Profile.js"><strong>{usersInfo.name}</strong> <br /></a>
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