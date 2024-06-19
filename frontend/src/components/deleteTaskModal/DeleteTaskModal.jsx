import React from "react";
import styles from "./deleteTaskModal.module.css";
import { Modal } from "@mantine/core";

export const DeleteTaskModal = ({
  openDeleteTaskModal,
  setOpenDeleteTaskModal,
}) => {
  return (
    <Modal
      opened={openDeleteTaskModal}
      onClose={() => setOpenDeleteTaskModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
      padding={"1.5rem"}
    >
      <div className={styles.deleteTaskContainer}>
        <p>Are you sure you want to Delete?</p>

        <button className={styles.delete}>Yes, Delete</button>
        <button
          onClick={() => setOpenDeleteTaskModal(false)}
          type="button"
          className={styles.cancel}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
