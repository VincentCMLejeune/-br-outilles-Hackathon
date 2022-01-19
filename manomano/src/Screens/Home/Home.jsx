import ClickableHouse from "../../Components/Clickable House/ClickableHouse";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Je suis le Home</h1>
      <ClickableHouse />
    </div>
  );
}
