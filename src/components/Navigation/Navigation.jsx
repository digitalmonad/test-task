import { Link } from "react-router-dom";
import React from "react";
import styled from "./Navigation.module.scss";

export const Navigation = () => (
  <div className={styled.root}>
    <nav>
      <Link to={"/"} className={styled.navItem}>
        <span>Home</span>
      </Link>

      <Link to={"/login"} className={styled.navItem}>
        <span>Login</span>
      </Link>

      <Link to={"/profile"} className={styled.navItem}>
        <span>Profile</span>
      </Link>
    </nav>
  </div>
);
