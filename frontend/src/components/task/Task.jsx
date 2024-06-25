import React, { useState } from "react";
import styles from "./task.module.css";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { DeleteTaskModal } from "../deleteTaskModal/DeleteTaskModal";
import toast from "react-hot-toast";
import newRequest from "../../utils/newRequest";

export const Task = ({ task }) => {
  const [openTaskSetting, setOpenTaskSetting] = useState(false);
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);

  const types = ["backlog", "todo", "progress", "done"];
  const filterType = (excludeType) => {
    return types.filter((type) => type !== excludeType);
  };

  const handleShareQuiz = (taskId) => {
    navigator.clipboard.writeText(`http://localhost:3000/share/${taskId}`);

    toast.success("Link copied!");
    setOpenTaskSetting(false);
  };

  const handleChangeCheckmark = async (done, checkId) => {
    try {
      const res = await newRequest.patch(`task/${task._id}/${checkId}`, {
        data: done,
      });
      window.location.reload();

      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShiftTask = async (whereTo) => {
    try {
      await newRequest.patch(`task/shift/${task._id}/?filter=${whereTo}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [showChecklist, setShowChecklist] = useState(false);

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
            <p title={task?.assignedTo} className={styles.assignedTo}>
              {task?.assignedTo.slice(0, 2)}
            </p>
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
        <h1 title={task?.title} className={styles.taskName}>
          {task?.title}
        </h1>

        <div className={styles.checklistArea}>
          <p>
            Checklist ({task?.checklist?.reduce((acc, t) => t.checked + acc, 0)}
            /{task?.checklist?.length})
          </p>

          {showChecklist ? (
            <FaAngleDown
              onClick={() => setShowChecklist(!showChecklist)}
              size={20}
              className={styles.dropdownUpIcon}
            />
          ) : (
            <FaAngleUp
              onClick={() => setShowChecklist(!showChecklist)}
              size={20}
              className={styles.dropdownUpIcon}
            />
          )}
        </div>
      </div>

      {showChecklist && (
        <div className={styles.allInputs}>
          {task?.checklist?.map((t) => (
            <div className={styles.singleInput} key={t._id}>
              <input
                type="checkbox"
                checked={t?.checked}
                onChange={(e) => {}}
                onClick={(e) => handleChangeCheckmark(e.target.checked, t._id)}
              />
              <p className={styles.taskContent}>{t?.task}</p>
            </div>
          ))}
        </div>
      )}
      <div className={styles.bottomBar}>
        <div>
          {task?.dueDate && (
            <button className={styles.btns}>{task?.dueDate}</button>
          )}
        </div>

        <div className={styles.btnsContainer}>
          {filterType(task?.type)?.map((_) => (
            <button
              key={_}
              className={styles.btns}
              onClick={() => handleShiftTask(_)}
            >
              {_}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
