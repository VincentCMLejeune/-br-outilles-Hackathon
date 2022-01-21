import radiateur from "../../Assets/radiateur.png"

import styles from "./HomePro.module.css";

export default function HomePro() {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Welcome, pro user</h1>
      <img className={styles.radiateur} src={radiateur} alt="radiateur" />
    </div>
  );
}
