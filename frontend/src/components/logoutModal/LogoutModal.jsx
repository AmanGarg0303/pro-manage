import React from "react";
import styles from "./logoutModal.module.css";
import { Modal } from "@mantine/core";

export const LogoutModal = ({ openLogoutModal, setOpenLogoutModal }) => {
  return (
    <Modal
      opened={openLogoutModal}
      onClose={() => setOpenLogoutModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
      padding={"1.5rem"}
    >
      <div className={styles.logoutContainer}>
        <p>Are you sure you want to Logout?</p>

        <button className={styles.logout}>Yes, Logout</button>
        <button
          onClick={() => setOpenLogoutModal(false)}
          type="button"
          className={styles.cancel}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
