import React, { useState, useEffect, Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import PrivateProfile from './PrivateProfile';

const PublicProfile = ({ userInfo }) => {
    const [_userData, setUserData] = useState(userInfo);
    const {user} = useAuth0();
    console.log(user);



    useEffect(() => {
        if (!_userData) {
            try {
                fetch(`http://localhost:5000/user_profile/${user.email}`)
                .then(res => res.json())
                .then(data => setUserData(data))
            } catch (err) {
                console.error(err.message);
            }
        }
    }, [])


    if (!_userData) {
        return <div>Loading..</div>
    }

    return (
        <section key={_userData.email}>
            <img src={_userData.picture} />
            <div>{_userData.name}</div>
            <div>@{_userData.username}</div>
            <div>{_userData.location}</div>
            <div>{_userData.phone}</div>
            <div>{_userData.short_bio}</div>
            <div>
                {/* <PrivateProfile data={info} /> */}
            </div>
        </section>
    );
};

export default PublicProfile;