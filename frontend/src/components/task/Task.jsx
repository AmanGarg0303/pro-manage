import React, { useState } from "react";
import styles from "./task.module.css";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export const Task = () => {
  const [openTaskSetting, setOpenTaskSetting] = useState(false);

  return (
    <div className={styles.singleTask}>
      <div className={styles.topbar}>
        <div className={styles.taskPriority}>
          <GoDotFill fill="pink" />
          <p className={styles.priority}>HIGH PRIORITY</p>
          <p className={styles.assignedTo}>AK</p>
        </div>

        <HiDotsHorizontal
          size={20}
          onClick={() => setOpenTaskSetting(!openTaskSetting)}
          style={{ cursor: "pointer" }}
        />

        {openTaskSetting && (
          <div className={styles.taskSettings}>
            <p>Edit</p>
            <p>Share</p>
            <p style={{ color: "red" }}>Delete</p>
          </div>
        )}
      </div>

      <div className={styles.header}>
        <h1 className={styles.taskName}>Hero Section</h1>

        <div className={styles.checklistArea}>
          <p>Checklist (0/3)</p>

          <FaAngleDown size={20} className={styles.dropdownUpIcon} />
        </div>
      </div>

      <div className={styles.allInputs}>
        <div className={styles.singleInput}>
          <input type="checkbox" />
          <p className={styles.taskContent}>Task that needs to be done</p>
        </div>

        <div className={styles.singleInput}>
          <input type="checkbox" />
          <p className={styles.taskContent}>Task that needs to be done</p>
        </div>

        <div className={styles.singleInput}>
          <input type="checkbox" />
          <p className={styles.taskContent}>
            Task that needs to be done, but it need to be done automatically,
            without any help
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div>
          <button className={styles.btns}>FEB 10th</button>
        </div>

        <div className={styles.btnsContainer}>
          <button className={styles.btns}>PROGRESS</button>
          <button className={styles.btns}>TO DO</button>
          <button className={styles.btns}>DONE</button>
        </div>
      </div>
    </div>
  );
};
