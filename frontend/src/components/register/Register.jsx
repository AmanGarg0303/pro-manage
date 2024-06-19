import React, { useState } from "react";
import styles from "./register.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { useActiveAuthComp } from "../../providers/activeAuthComp";

export const Register = () => {
  const { setActiveAuthComp } = useActiveAuthComp();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  const [errorResponse, setErrorResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const error = {};
    setError(error);
    setErrorResponse("");

    if (!username) {
      error.nameErr = "Username is required!";
    }

    if (!email) {
      error.emailErr = "Email is required!";
    }

    if (!password) {
      error.passwordErr = "Password is required!";
    }

    if (!confirmPassword) {
      error.confirmPasswordErr = "Confirm Password is required!";
      return;
    }

    if (password !== confirmPassword) {
      error.confirmPasswordErr = "Password and Confirm Password are not same!";
      return;
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <h2>Register</h2>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <FaRegUser fill="gray" size={20} />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p className={styles.error}>{error.nameErr}</p>
        </div>

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

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineLock fill="gray" size={20} />
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <MdOutlineRemoveRedEye
              fill={showPassword1 ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword1(!showPassword1)}
            />
          </div>
          <p className={styles.error}>{error.confirmPasswordErr}</p>
        </div>

        <p className={styles.error}>{errorResponse}</p>

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
