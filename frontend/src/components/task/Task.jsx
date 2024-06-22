import React, { useState } from "react";
import styles from "./task.module.css";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { DeleteTaskModal } from "../deleteTaskModal/DeleteTaskModal";
import toast from "react-hot-toast";

export const Task = ({ task }) => {
  const [openTaskSetting, setOpenTaskSetting] = useState(false);

  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);

  const types = ["backlog", "todo", "progress", "done"];
  const filterType = (excludeType) => {
    return types.filter((type) => type !== excludeType);
  };

  const handleShareQuiz = (taskId) => {
    navigator.clipboard.writeText(`http://localhost:3000/share/${taskId}`);

    toast.success("Link copied to clipboard");
    setOpenTaskSetting(false);
  };

  return (
    <div className={styles.singleTask}>
      <div className={styles.topbar}>
        <div className={styles.taskPriority}>
          <GoDotFill
            fill={
              task?.priority === "low"
                ? "#63c05b"
                : task.priority === "moderate"
                ? "#18b0ff"
                : "#ff2473"
            }
          />
          <p className={styles.priority}>{task?.priority} PRIORITY</p>
          {task?.assignedTo && (
            <p className={styles.assignedTo}>{task?.assignedTo.slice(2)}</p>
          )}
        </div>

        <HiDotsHorizontal
          size={20}
          onClick={() => setOpenTaskSetting(!openTaskSetting)}
          style={{ cursor: "pointer" }}
        />

        {openTaskSetting && (
          <div className={styles.taskSettings}>
            <p>Edit</p>
            <p onClick={() => handleShareQuiz(task?._id)}>Share</p>
            <p
              style={{ color: "red" }}
              onClick={() => setOpenDeleteTaskModal(true)}
            >
              Delete
            </p>
          </div>
        )}

        <DeleteTaskModal
          openDeleteTaskModal={openDeleteTaskModal}
          setOpenDeleteTaskModal={setOpenDeleteTaskModal}
        />
      </div>

      <div className={styles.header}>
        <h1 className={styles.taskName}>Hero Section</h1>

        <div className={styles.checklistArea}>
          <p>
            Checklist ({task?.checklist?.reduce((acc, t) => t.checked + acc, 0)}
            /{task?.checklist?.length})
          </p>

          <FaAngleDown size={20} className={styles.dropdownUpIcon} />
        </div>
      </div>

      <div className={styles.allInputs}>
        {task?.checklist?.map((t) => (
          <div className={styles.singleInput} key={t._id}>
            <input type="checkbox" checked={t?.checked} />
            <p className={styles.taskContent}>{t?.task}</p>
          </div>
        ))}
      </div>

      <div className={styles.bottomBar}>
        <div>
          {task?.dueDate && (
            <button className={styles.btns}>{task?.dueDate}</button>
          )}
        </div>

        <div className={styles.btnsContainer}>
          {filterType(task?.type)?.map((_) => (
            <button className={styles.btns}>{_}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
