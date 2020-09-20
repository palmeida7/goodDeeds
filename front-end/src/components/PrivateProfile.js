import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

const PrivateProfile = (props) => {
    // const [userData, setUserData] = useState(props.userData || {});
    const { user } = useAuth0();

    useEffect(() => {
        if (!props.userData) {
            try {
                fetch(`http://localhost:5000/user_profile/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        // setUserData(data)
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
    const [picture] = useState(user.picture);
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
                <div class="container" >
                    <section class="section">
                        <div class="container">
                            {/* button : save & continue */}
                            <button class="button is-light is-pulled-right">
                                Save & Continue
						</button>
                            <div>
                                <span class="tag is-light" >{location}</span>
                            </div>
                            {/* screen title */}
                            <h1 class="title is-size-1">Private Profile</h1>
                        </div>
                        <div>
                            <section>
                                {/* avatar */}
                                <div class="container">
                                    <article class="media">
                                        <figure class="media-left">
                                            <p class="image is-48x48">
                                                <img
                                                    class="is-rounded"
                                                    src={picture}
                                                />
                                            </p>
                                        </figure>
                                        {/* user info */}
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <strong>{name}</strong> <br />
                                                    <small>@{userName}</small>{" "}
                                                    <span class="tag is-success is-normal">Rating</span>{" "}
                                                    <small>100%</small>
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
            <section class="section ml-2">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            {/* upload file */}
                            {/* <div class="file">
                                        <label class="file-label">
                                            <input class="file-input" type="file" name="resume" />
                                            <span class="file-cta mb-5"> */}
                            {/* <span class="file-icon">
												<i class="fas fa-upload"></i>
											</span> */}
                            {/* <span class="file-label">Upload Pic+</span>
                                            </span>
                                        </label>
                                    </div> */}
                            {/* full name */}
                            <div class="field">
                                <label class="label">Full Name</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        value={name || ""}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="enter full name"
                                    />
                                </div>
                            </div>
                            {/* username */}
                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        value={userName || ""}
                                        onChange={e => setUserName(e.target.value)}
                                        placeholder="enter username"
                                    />
                                </div>
                            </div>
                            {/* email // changed it to phone number */}
                            <div class="field">
                                <label class="label">Phone Number</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        value={phone || ""}
                                        onChange={e => setPhone(e.target.value)}
                                        placeholder="e.g. (123)456-7890"
                                    />
                                </div>
                            </div>
                            {/* short bio */}
                            <label class="label">Short Bio</label>
                            <textarea
                                class="textarea"
                                value={shortBio || ""}
                                onChange={e => setShortBio(e.target.value)}
                                placeholder="e.g. Hello world"
                            ></textarea>
                        </div>
                        {/* goodDeed rating */}
                        <div class="column">
                            <h1 class="title">goodDeed Rating</h1>
                            <span class="tag is-success is-medium mb-2">100%</span>
                            {/* phone number // changed to location */}
                            <div class="field mt-6">
                                <label class="label">Location</label>
                                <div class="control">
                                    <select
                                        class="input"
                                        type="text"
                                        value={location || ""}
                                        onChange={e => setLocation(e.target.value)}
                                        placeholder="Choose a location"
                                    >
                                        <option> -- Location -- </option>
                                        <option>Atlanta, GA</option>
                                        <option>Virtual/Remote</option>
                                    </select>
                                </div>
                            </div>
                            {/* location */}
                            {/* <div class="field">
                                        <label class="label">Location</label>
                                        <div class="control">
                                            <input
                                                class="input"
                                                type="text"
                                                placeholder="enter phone #"
                                            />
                                        </div>
                                    </div> */}
                            {/* interest tags areas */}
                            <label class="label">Interest Areas</label>
                            <div class="tags has-addons">
                                <span class="tag is-warning">Seniors</span>
                                <a class="tag is-delete mr-2"></a>
                                <span class="tag is-black">Black Lives Matter</span>
                                <a class="tag is-delete mr-2"></a>
                                <span class="tag is-primary">LBGTQ</span>
                                <a class="tag is-delete mr-2"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </form>
    );
};

export default PrivateProfile;