import React, { useState } from "react";
import styles from "./addPeopleModal.module.css";
import { Modal } from "@mantine/core";
import { useSelector } from "react-redux";
import newRequest from "../../utils/newRequest";

export const AddPeopleModal = ({
  openAddPeopleModal,
  setOpenAddPeopleModal,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const [compToShow, setCompToShow] = useState(0);

  const handleAddPeople = async (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Email is required!");
      return;
    }

    if (email === currentUser.email) {
      setError("Yours and assignee email cannot be same!");
      return;
    }

    try {
      await newRequest.put("user/assignee", { email });
      setCompToShow(1);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
    }
  };

  return (
    <Modal
      opened={openAddPeopleModal}
      onClose={() => setOpenAddPeopleModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
      padding={"2rem"}
    >
      {compToShow === 0 ? (
        <div className={styles.addPeopleContainer}>
          <p className={styles.heading}>Add people to the board</p>

          <form onSubmit={handleAddPeople}>
            <input
              type="email"
              placeholder="Enter email"
              className={styles.addEmailInput}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className={styles.error}>{error}</p>

            <div className={styles.btns}>
              <button
                onClick={() => setOpenAddPeopleModal(false)}
                type="button"
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button type="submit" className={styles.addEmailBtn}>
                Add Email
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.addPeopleContainer}>
          <p className={styles.heading} style={{ textAlign: "center" }}>
            {email} added to board!
          </p>

          <div className={styles.btns}>
            <button
              onClick={() => {
                setOpenAddPeopleModal(false);
                setCompToShow(0);
              }}
              className={styles.addEmailBtn}
            >
              Okay, Got it
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
