import React from "react";
import styles from "./auth.module.css";
import ArtImg from "../../assets/ArtImg.svg";
import { Login } from "../../components/login/Login";
import { Register } from "../../components/register/Register";
import { useActiveAuthComp } from "../../providers/activeAuthComp";

const Auth = () => {
  const { activeAuthComp } = useActiveAuthComp();
  // console.log(activeAuthComp);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={ArtImg} alt="" className={styles.artImg} />
        <h2>Welcome aboard my friend</h2>
        <p>Just a couple of clicks and we start</p>
      </div>

      <div className={styles.rightSide}>
        {activeAuthComp === 0 ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
