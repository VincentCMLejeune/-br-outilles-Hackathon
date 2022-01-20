import ClickableHouse from "../../Components/Clickable House/ClickableHouse";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <ClickableHouse />
    </div>
  );
}
