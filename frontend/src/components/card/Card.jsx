import React, { useState } from "react";
import styles from "./card.module.css";
import { VscCollapseAll } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { Task } from "../task/Task";
import { AddTaskModal } from "../../addTaskModal/AddTaskModal";

export const Card = ({ name }) => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  return (
    <div className={styles.singleCard}>
      <div className={styles.mainTitle}>
        <h2 className={styles.title}>{name}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "0 0.6rem" }}>
          {name === "To do" && (
            <IoIosAdd
              onClick={() => setOpenAddTaskModal(true)}
              size={30}
              fill="gray"
              className={styles.icon}
            />
          )}
          <VscCollapseAll size={25} fill="gray" className={styles.icon} />
        </div>

        <AddTaskModal
          openAddTaskModal={openAddTaskModal}
          setOpenAddTaskModal={setOpenAddTaskModal}
        />
      </div>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};
