import React from "react";
import styles from "./analytics.module.css";
import { GoDotFill } from "react-icons/go";
import padStartFxn from "../../utils/padStartFxn";

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
            <strong>{padStartFxn(1)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              To-do Tasks
            </p>
            <strong>{padStartFxn(50)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              In-progress Tasks
            </p>
            <strong>{padStartFxn(100)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Completed Tasks
            </p>
            <strong>{padStartFxn(4)}</strong>
          </div>
        </div>

        <div className={styles.analytic}>
          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Low Priority
            </p>
            <strong>{padStartFxn(45)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Moderate Priority
            </p>
            <strong>{padStartFxn(16)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              High-priority
            </p>
            <strong>{padStartFxn(9)}</strong>
          </div>

          <div className={styles.singleAnalytic}>
            <p className={styles.titleContent}>
              <GoDotFill fill="#91c5cc" />
              Due Date Tasks
            </p>
            <strong>{padStartFxn(7)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
