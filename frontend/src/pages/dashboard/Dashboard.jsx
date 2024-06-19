import React from "react";
import styles from "./dashboard.module.css";
import numToMonth from "../../utils/numToMonth";
import { Cards } from "../../components/cards/Cards";
import { Card } from "../../components/card/Card";

const Dashboard = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h1 style={{ fontSize: "1.4rem" }}>Welcome! Aman</h1>
        <p style={{ color: "gray", fontSize: "1.2rem" }}>
          {date} {numToMonth(month)}, {year}
        </p>
      </div>

      <div className={styles.content}>
        <p style={{ fontSize: "1.6rem", fontWeight: "600" }}>Board</p>
        <select>
          <option value="today">Today</option>
          <option selected value="week">
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
