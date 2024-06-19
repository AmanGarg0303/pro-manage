import React, { useState } from "react";
import styles from "./settings.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState({
    usernameErr: "",
    emailErr: "",
    oldPasswordErr: "",
    newPasswordErr: "",
  });

  const [errorResponse, setErrorResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateSettings = (e) => {
    e.preventDefault();

    const error = {};
    setError(error);
    setErrorResponse("");

    if (!username) {
      error.usernameErr = "Username is required!";
    }

    if (!email) {
      error.emailErr = "Email is required!";
    }

    if (!oldPassword && newPassword) {
      error.oldPasswordErr = "Old Password is required!";
      //   return;
    }

    if (oldPassword && !newPassword) {
      error.newPasswordErr = "New Password is required!";
      return;
    }

    if (oldPassword.length > 1 && oldPassword === newPassword) {
      error.newPasswordErr = "Old and new Password are same!";
      return;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Settings</h2>

      <form className={styles.form} onSubmit={handleUpdateSettings}>
        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <FaRegUser fill="gray" size={20} />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p className={styles.error}>{error.usernameErr}</p>
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
              placeholder="Old Password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <MdOutlineRemoveRedEye
              fill={showPassword ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <p className={styles.error}>{error.oldPasswordErr}</p>
        </div>

        <div className={styles.InpWrapper}>
          <div className={styles.mainInp}>
            <MdOutlineLock fill="gray" size={20} />
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <MdOutlineRemoveRedEye
              fill={showPassword1 ? "black" : "gray"}
              size={20}
              onClick={() => setShowPassword1(!showPassword1)}
            />
          </div>
          <p className={styles.error}>{error.newPasswordErr}</p>
        </div>

        <p className={styles.error}>{errorResponse}</p>

        <button className={styles.updateBtn} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Settings;
