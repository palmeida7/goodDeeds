import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import PublicProfile from "../PublicProfile";
import CreateDeed from '../CreateDeed';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userData, setUserData] = useState();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         fetch('http://localhost:5000/add_users', {
    //             method: 'POST',
    //             body: JSON.stringify(user),
    //             headers: { 'Content-type': "application/json" }
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //     }
    // }, [isAuthenticated, user]);


    useEffect(() => {
        if (user) {
            try {
                fetch(`http://localhost:5000/user_profile/${user.email}`)
                .then(res => res.json())
                .then(data => setUserData(data))
            } catch (err) {
                console.error(err.message);
            }
        }
    }, [user])

    // useEffect(() => {

    // });

    if (isLoading || !userData) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && userData && (
            <div>
                {/* <div>{JSON.stringify(user, null, 2)}</div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton /> */}
                <PublicProfile userInfo={userData} />
                <CreateDeed />
                {/* <PrivateProfile userData={userData} /> */}
            </div>
        )
    );
};

export default Profile;