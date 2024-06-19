import React, { useState } from "react";
import styles from "./login.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useActiveAuthComp } from "../../providers/activeAuthComp";

export const Login = () => {
  const { setActiveAuthComp } = useActiveAuthComp();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const [errorResponse, setErrorResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const error = {};
    setError(error);
    setErrorResponse("");

    if (!email) {
      error.emailErr = "Email is required!";
    }

    if (!password) {
      error.passwordErr = "Password is required!";
      return;
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineEmail fill="gray" size={20} />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className={styles.error}>{error.emailErr}</p>
        </div>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineLock fill="gray" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <MdOutlineRemoveRedEye
              fill={showPassword ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <p className={styles.error}>{error.passwordErr}</p>
        </div>

        <p className={styles.error}>{errorResponse}</p>

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
