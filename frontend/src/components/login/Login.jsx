import React, { useState } from "react";
import styles from "./login.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useActiveAuthComp } from "../../providers/activeAuthComp";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { activeAuthComp, setActiveAuthComp } = useActiveAuthComp();

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineEmail fill="gray" size={20} />
            <input type="text" placeholder="Email" />
          </div>
          <p className={styles.error}>Error</p>
        </div>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineLock fill="gray" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <MdOutlineRemoveRedEye
              fill={showPassword ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <p className={styles.error}>Error</p>
        </div>

        <p className={styles.error}>Backend Error</p>

        <button className={styles.loginBtn} type="submit">
          Log in
        </button>

        <p className={styles.noAcc}>Have no account yet?</p>

        <button
          className={styles.registerBtn}
          type="button"
          onClick={() => setActiveAuthComp(1)}
        >
          Register
        </button>
      </form>
    </div>
  );
};
