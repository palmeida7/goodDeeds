import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import AvailableDeeds from "./AvailableDeeds";

const SignIn = () => {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            fetch('http://localhost:5000/add_users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-type': "application/json" }
            })
                .then(res => res.json())
        }
    }, [isAuthenticated, user]);

    useEffect(() => {
        if (isAuthenticated) {
            try {
                fetch(`http://localhost:5000/user_profile/${user.email}`)
                    .then(res => res.json())
                    .then((data) => {
                        window.sessionStorage.clear();
                        window.sessionStorage.setItem("username", data.username)
                        window.sessionStorage.setItem("location", data.location)
                        window.sessionStorage.setItem("phone", data.phone)
                        window.sessionStorage.setItem("short_bio", data.short_bio)
                        window.sessionStorage.setItem("name", data.name)
                        window.sessionStorage.setItem("email", data.email)
                        window.sessionStorage.setItem("picture", data.picture)
                        window.sessionStorage.setItem("users_id", data.id)
                    })
            } catch (err) {
                console.error(err.message);
            }
        }
    }, [isAuthenticated, user]);


    return (
        isAuthenticated && (
            <div>
                <AvailableDeeds />
            </div>
        )
    );
};

export default SignIn;