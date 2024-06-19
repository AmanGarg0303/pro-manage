import React, { useState } from "react";
import styles from "./register.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { useActiveAuthComp } from "../../providers/activeAuthComp";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const { activeAuthComp, setActiveAuthComp } = useActiveAuthComp();

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Register</h2>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <FaRegUser fill="gray" size={20} />
            <input type="text" placeholder="Username" />
          </div>
          <p className={styles.error}>Error</p>
        </div>

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

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineLock fill="gray" size={20} />
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <MdOutlineRemoveRedEye
              fill={showPassword1 ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword1(!showPassword1)}
            />
          </div>
          <p className={styles.error}>Error</p>
        </div>

        <p className={styles.error}>Backend error</p>

        <button className={styles.registerBtn} type="submit">
          Register
        </button>

        <p className={styles.haveAnAcc}>Have an account?</p>

        <button
          className={styles.loginBtn}
          type="button"
          onClick={() => setActiveAuthComp(0)}
        >
          Log in
        </button>
      </form>
    </div>
  );
};
