import React, { useState } from "react";
import styles from "./dashboard.module.css";
import numToMonth from "../../utils/numToMonth";
import { Card } from "../../components/card/Card";
import { IoPeopleOutline } from "react-icons/io5";
import { AddPeopleModal } from "../../components/addPeopleModal/AddPeopleModal";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const [openAddPeopleModal, setOpenAddPeopleModal] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1 style={{ fontSize: "1.4rem" }}>Welcome! {currentUser?.username}</h1>
        <p style={{ color: "gray", fontSize: "1.2rem" }}>
          {date} {numToMonth(month)}, {year}
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.miniContent}>
          <p className={styles.board}>Board</p>

          <div
            className={styles.addPeople}
            onClick={() => setOpenAddPeopleModal(true)}
          >
            <IoPeopleOutline />
            <p>Add People</p>
          </div>

          <AddPeopleModal
            openAddPeopleModal={openAddPeopleModal}
            setOpenAddPeopleModal={setOpenAddPeopleModal}
          />
        </div>

        <select>
          <option value="today">Today</option>
          <option defaultValue={"week"} value="week">
            This Week
          </option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className={styles.mainCards}>
        <Card name="Backlog" />
        <Card name="To do" />
        <Card name="In progress" />
        <Card name="Done" />
      </div>
    </div>
  );
};

export default Dashboard;
