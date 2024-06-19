import React from "react";
import styles from "./analytics.module.css";
import { GoDotFill } from "react-icons/go";

const Analytics = () => {
  return (
    <div className={styles.container}>
      <h2>Analytics</h2>

      <div className={styles.analyticWrapper}>
        <div className={styles.analytic}>
          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Backlog Tasks
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              To-do Tasks
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              In-progress Tasks
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Completed Tasks
            </p>
            <strong>16</strong>
          </div>
        </div>

        <div className={styles.analytic}>
          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Low Priority
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Moderate Priority
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              High-priority
            </p>
            <strong>16</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Due Date Tasks
            </p>
            <strong>16</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
