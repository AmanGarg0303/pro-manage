import React, { useRef, useState } from "react";
import styles from "./addTaskModal.module.css";
import { Modal } from "@mantine/core";
import { GoDotFill } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import formatDate from "../utils/formatDate";

export const AddTaskModal = ({ openAddTaskModal, setOpenAddTaskModal }) => {
  const [date, setDate] = useState(null);
  const dateRef = useRef();

  const onDateChnage = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      setDate(e.target.value);
    }
  };

  const openDatePicker = () => {
    if (dateRef.current) {
      dateRef.current.focus();
      dateRef.current.showPicker();
    }
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      opened={openAddTaskModal}
      onClose={() => setOpenAddTaskModal(false)}
      closeOnClickOutside
      withCloseButton={false}
      centered
      size={"lg"}
      padding={"1.5rem"}
    >
      <form className={styles.form} onSubmit={handleCreateTask}>
        <div className={styles.taskTitle}>
          <label htmlFor="title">
            Title <span className={styles.asterik}>*</span>
          </label>
          <input type="text" id="title" placeholder="Enter Task Title" />
        </div>

        <div className={styles.priorities}>
          <p>
            Select Priority <span className={styles.asterik}>*</span>
          </p>

          <button className={styles.priority}>
            <GoDotFill fill="#ff2473" />
            <p>HIGH PRIORITY</p>
          </button>
          <button className={styles.priority}>
            <GoDotFill fill="#18b0ff" />
            <p>MODERATE PRIORITY</p>
          </button>
          <button className={styles.priority}>
            <GoDotFill fill="#63c05b" />
            <p>LOW PRIORITY</p>
          </button>
        </div>

        <div className={styles.assignTo}>
          <p>Assign to</p>

          <select name="" id="">
            <option value="">Add a assignee</option>
            <option value="">Brocode</option>
            <option value="">Amy</option>
            <option value="">Jake</option>
          </select>
        </div>

        <div className={styles.addNewTaskContainer}>
          <p>
            Checklist (1/3) <span className={styles.asterik}>*</span>
          </p>

          <div className={styles.allInputs}>
            <div className={styles.singleInput}>
              <div className={styles.mainInp}>
                <input type="checkbox" />
                <p className={styles.taskContent}>Task that needs to be done</p>
              </div>
              <RiDeleteBinLine
                size={18}
                fill="red"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={styles.singleInput}>
              <div className={styles.mainInp}>
                <input type="checkbox" />
                <p className={styles.taskContent}>Task that needs to be done</p>
              </div>
              <RiDeleteBinLine
                size={18}
                fill="red"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={styles.singleInput}>
              <div className={styles.mainInp}>
                <input type="checkbox" />
                <p className={styles.taskContent}>
                  Task that needs to be done, but it need to be done
                  automatically, without any help dqwdjqd ceHI
                </p>
              </div>
              <RiDeleteBinLine
                size={18}
                fill="red"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className={styles.addNewTask}>
            <IoIosAdd size={25} />
            Add New
          </div>
        </div>

        <input
          type="date"
          name="date"
          ref={dateRef}
          style={{ visibility: "hidden", width: "1px", height: "1px" }}
          onChange={onDateChnage}
        />

        <div className={styles.btns}>
          <div>
            <button
              onClick={openDatePicker}
              type="button"
              className={styles.dueDateBtn}
            >
              {date ? formatDate(date) : "Select due date"}
            </button>
          </div>

          <div>
            <button
              onClick={() => setOpenAddTaskModal(false)}
              type="button"
              className={styles.cancelBtn}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveBtn}>
              Save
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
