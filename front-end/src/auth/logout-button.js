import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    );
};
export default LogoutButton;


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "react-bootstrap";

// import "./logout-button.css"

// const LogoutButton = () => {
//   const { logout } = useAuth0();
//   return (
//     <Button 
//       onClick={() =>
//         logout({
//           returnTo: window.location.origin,
//         })
//       }
//       variant="danger"
//       className="logout"
//     >
//       Log Out
//     </Button>
//   );
// };

// export default LogoutButton;