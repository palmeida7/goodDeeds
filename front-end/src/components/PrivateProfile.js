import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import RatingBadge from './Rating/RatingBadge';


const PrivateProfile = (props) => {
    const { user } = useAuth0();

    useEffect(() => {
        if (!props.userData) {
            try {
                fetch(`http://localhost:5000/user_profile/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUserName(data.username)
                        setLocation(data.location)
                        setName(data.name)
                        setShortBio(data.short_bio)
                        setPhone(data.phone)
                    })
            } catch (err) {
                console.error(err.message);
            }
        }
    }, []);
    const userData = props.userData || {};
    const [userName, setUserName] = useState(userData.username);
    const [location, setLocation] = useState(userData.location);
    const [phone, setPhone] = useState(userData.phone);
    const [shortBio, setShortBio] = useState(userData.short_bio);
    const [name, setName] = useState(userData.name);
    const [email] = useState(user.email);
    const [updated, setUpdated] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, userName, location, phone, shortBio, email };
            const response = await fetch(`http://localhost:5000/update_user`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
            let results = await response.json();
            window.sessionStorage.clear();
            window.sessionStorage.setItem("username", results.username)
            window.sessionStorage.setItem("location", results.location)
            window.sessionStorage.setItem("phone", results.phone)
            window.sessionStorage.setItem("short_bio", results.short_bio)
            window.sessionStorage.setItem("name", results.name)
            window.sessionStorage.setItem("email", results.email)
            window.sessionStorage.setItem("picture", results.picture)
            window.sessionStorage.setItem("users_id", results.id)
            setUpdated(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    if (updated) {
        return <Redirect to={`/public_profile/${window.sessionStorage.getItem('email')}`} />
    };

    return (
        <form onSubmit={onSubmitForm}>
            <section>
                <div className="container" >
                    <section className="section">
                        <div className="container">
                            {/* button : save & continue */}
                            <button className="button is-light is-pulled-right">
                                Save & Continue
						</button>
                            <div>
                                <span className="tag is-light" >{location}</span>
                            </div>
                            {/* screen title */}
                            <h1 className="title is-size-1">Private Profile</h1>
                        </div>
                        <div>
                            <section>
                                {/* avatar */}
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
                                        {/* user info */}
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong>{name}</strong> <br />
                                                    <small>@{userName}</small>{" "}
                                                    {/* <span className="tag is-success is-normal">Rating</span>{" "}
                                                    <small>100%</small> */}
                                                    <RatingBadge userId={window.sessionStorage.getItem('users_id')}
                                                        badgeSize="is-normal">
                                                    </RatingBadge>
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
            <section className="section ml-2">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            {/* upload file */}
                            {/* <div className="file">
                                        <label className="file-label">
                                            <input className="file-input" type="file" name="resume" />
                                            <span className="file-cta mb-5"> */}
                            {/* <span className="file-icon">
												<i className="fas fa-upload"></i>
											</span> */}
                            {/* <span className="file-label">Upload Pic+</span>
                                            </span>
                                        </label>
                                    </div> */}
                            {/* full name */}
                            <div className="field">
                                <label className="label">Full Name</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={name || ""}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="enter full name"
                                    />
                                </div>
                            </div>
                            {/* username */}
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={userName || ""}
                                        onChange={e => setUserName(e.target.value)}
                                        placeholder="enter username"
                                    />
                                </div>
                            </div>
                            {/* email // changed it to phone number */}
                            <div className="field">
                                <label className="label">Phone Number</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={phone || ""}
                                        onChange={e => setPhone(e.target.value)}
                                        placeholder="e.g. (123)456-7890"
                                    />
                                </div>
                            </div>
                            {/* short bio */}
                            <label className="label">Short Bio</label>
                            <textarea
                                className="textarea"
                                value={shortBio || ""}
                                onChange={e => setShortBio(e.target.value)}
                                placeholder="e.g. Hello world"
                            ></textarea>
                        </div>
                        {/* goodDeed rating */}
                        <div className="column">
                            <h1 className="title">goodDeed Rating</h1>
                            <span className="tag is-success is-medium mb-2">100%</span>
                            {/* phone number // changed to location */}
                            <div className="field mt-6">
                                <label className="label">Location</label>
                                <div className="control">
                                    <select
                                        className="input"
                                        type="text"
                                        value={location || ""}
                                        onChange={e => setLocation(e.target.value)}
                                        placeholder="Choose a location">
                                        <option> -- Location -- </option>
                                        <option>Atlanta, GA</option>
                                        <option>Virtual/Remote</option>
                                    </select>
                                </div>
                            </div>
                            {/* location */}
                            {/* <div className="field">
                                        <label className="label">Location</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="enter phone #"
                                            />
                                        </div>
                                    </div> */}
                            {/* interest tags areas */}
                            <label className="label">Interest Areas</label>
                            <div className="tags has-addons">
                                <span className="tag is-warning">Seniors</span>
                                <a className="tag is-delete mr-2"></a>
                                <span className="tag is-black">Black Lives Matter</span>
                                <a className="tag is-delete mr-2"></a>
                                <span className="tag is-primary">LBGTQ</span>
                                <a className="tag is-delete mr-2"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </form>
    );
};

export default PrivateProfile;