import React from "react";
import styles from "./GoogleLoginButton.module.scss";
import { useGoogleAuth } from "../utils/context/authContext";

export const GoogleLoginButton = () => {
  const { signIn } = useGoogleAuth();

  return (
    <button className={styles.root} onClick={signIn}>
      Sign in with Google
    </button>
  );
};
