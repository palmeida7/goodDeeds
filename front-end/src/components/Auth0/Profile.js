import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from './LogoutButton';
import AvailableGd from "../AvailableGd";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(()=>{
        if (isAuthenticated) {
            fetch('http://localhost:5000/add_users',{
                method: 'POST', 
                body: JSON.stringify(user),
                headers: {'Content-type':"application/json"}})
                .then(res=>res.json())
                .then(data=>console.log(data))
        }
    },[isAuthenticated,user]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                {/* <div>{JSON.stringify(user, null, 2)}</div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton /> */}
                <AvailableGd />
            </div>
        )
    );
};

export default Profile;