import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

const PrivateProfile = (props) => {
    // const [userData, setUserData] = useState(props.userData || {});
    const {user} = useAuth0();

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
    },[]);
    const userData = props.userData || {};
    const [userName, setUserName] = useState(userData.username);
    const [location, setLocation] = useState(userData.location);
    const [phone, setPhone] = useState(userData.phone);
    const [shortBio, setShortBio] = useState(userData.short_bio);
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(user.email);
    const [updated, setUpdated] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("Profile updated.")
        // if (isAuthenticated) {
            try {
                const body = { name, userName, location, phone, shortBio, email };
                const response = await fetch(`http://localhost:5000/update_user`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body)
                });
                let results = await response.json();
                console.log(results);
                setUpdated(true);
            } catch (err) {
                console.error(err.message);
            }
        // };
    };

    if (updated) {
        return <Redirect to={"/public_profile"} />
    };

    return (
        // isAuthenticated && (
        <div>
            {/* <Navbar /> */}
            <form onSubmit={onSubmitForm}>
                <h1>Private Profile</h1>
                <br />
                <br />
                <h5>Full Name</h5>
                <input type="text" value={name || ""} placeholder="enter here.." onChange={e => setName(e.target.value)} />
                <br />
                <br />
                <h5>Username</h5>
                <input type="text" value={userName || ""} placeholder="enter here.." onChange={e => setUserName(e.target.value)} />
                <br />
                <br />
                <h5>Phone Number</h5>
                <input type="text" value={phone || ""} placeholder="enter here.." onChange={e => setPhone(e.target.value)} />
                <br />
                <br />
                <h5>Location</h5>
                <select type="text" value={location || ""} onChange={e => setLocation(e.target.value)}>
                    <option> -- Location -- </option>
                    <option>Atlanta, GA</option>
                    <option>Virtual</option>
                </select>
                <br />
                <br />
                <h5>Short Bio</h5>
                <input type="text" value={shortBio || ""} placeholder="describe yourself with a tweet!" onChange={e => setShortBio(e.target.value)}/>
                <button >Save and Continue</button>
            </form>
        </div>
        // )
    );
};

export default PrivateProfile;