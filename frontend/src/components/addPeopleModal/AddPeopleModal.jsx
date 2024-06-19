import React, { useState } from "react";
import styles from "./addPeopleModal.module.css";
import { Modal } from "@mantine/core";

export const AddPeopleModal = ({
  openAddPeopleModal,
  setOpenAddPeopleModal,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleAddPeople = (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Email is required!");
      return;
    }
  };

  return (
    <Modal
      opened={openAddPeopleModal}
      onClose={() => setOpenAddPeopleModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
      padding={"1.5rem"}
    >
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
    </Modal>
  );
};
