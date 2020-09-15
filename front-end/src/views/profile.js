import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <div>
                <div>{JSON.stringify(user, null, 2)}</div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};
export default Profile;

// import React from "react";
// import { Container } from "react-bootstrap";

// export const Profile = () => {
//   return (
//     <Container className="mb-5">
//       <h1>Profile</h1>
//       <p>
//         You will need to login in to be able to access your personal Profile
//          <strong>We look forward to seeing your GoodDeeds</strong>.
//       </p>
//     </Container>
//   );
// };

// export default Profile;