import React from "react";
import { useGoogleAuth } from "../components/utils/context/authContext";

export const ProfileScreen = () => {
  const auth = useGoogleAuth();
  const userProfilePicUrl = auth?.googleUser?.profileObj?.imageUrl;
  const userEmail = auth?.googleUser?.profileObj?.email;
  const userFirstName = auth?.googleUser?.profileObj?.givenName;
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={userProfilePicUrl} />
        {userFirstName && <h3>{userFirstName}</h3>}
        {userEmail && <p>{userEmail}</p>}
      </div>
    </div>
  );
};
