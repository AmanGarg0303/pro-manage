import React from "react";
import styles from "./publicSharedTask.module.css";
import LogoIcon from "../../assets/logo.svg";
import { GoDotFill } from "react-icons/go";

const PublicSharedTask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src={LogoIcon} alt="logo" />
        <h1 className={styles.mainTitle}>Pro Manage</h1>
      </div>

      <div className={styles.mainTask}>
        <div className={styles.singleTask}>
          <div className={styles.topbar}>
            <div className={styles.taskPriority}>
              <GoDotFill fill="#ff2473" />
              <p className={styles.priority}>HIGH PRIORITY</p>
              <p className={styles.assignedTo}>AK</p>
            </div>
          </div>

          <div className={styles.header}>
            <h1 className={styles.taskName}>Hero Section</h1>

            <div className={styles.checklistArea}>
              <p>Checklist (0/3)</p>
            </div>
          </div>

          <div className={styles.allInputs}>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>Task that needs to be done</p>
            </div>

            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>Task that needs to be done</p>
            </div>

            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
            <div className={styles.singleInput}>
              <input type="checkbox" readOnly />
              <p className={styles.taskContent}>
                Task that needs to be done, but it need to be done
                automatically, without any help
              </p>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <p className={styles.dueDate}>Due Date</p>
            <button className={styles.btn}>Feb 10th</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicSharedTask;
