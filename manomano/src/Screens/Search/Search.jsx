import styles from "./Search.module.css";
import logo from "../../Assets/MM_LOGO.png"
import Card from "./Card";
import filter from "../../Assets/filter.png";

export default function Search() {
  return (
    <div>
      <img className={styles.logoMM} src={logo} alt="Logo Mano Mano"/>
        <div className={styles.pageTop}>
          <h1 className={styles.title}>« Tronçonneuse »</h1>
          <p className={styles.subTitle}>Plus de 500 produits trouvés</p>
          <img className={styles.filterImg} src={filter} alt="filter button" />
        </div>
      <div className={styles.cards}>
        <Card/>
        <Card/>
      </div>
      <div className={styles.cards2}>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
