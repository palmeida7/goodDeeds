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
                .then(data => console.log(data))
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