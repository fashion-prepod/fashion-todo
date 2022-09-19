import React from "react";
import styles from "./index.module.css";
import { getUserEmail } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/async-actions";
import { useNavigate } from "react-router-dom";

export const TodoNavbar = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmailDisplay = userEmail ? userEmail : "you are not logged in";

  const logoutHandler = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.userName}>{userEmailDisplay}</span>
      <button className={styles.btn} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
