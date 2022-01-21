import styles from "./Search.module.css";
import Card2 from "./Card2";
import filter from "../../Assets/filter.png";


export default function Search() {
  return (
    <div>
        <div className={styles.pageTop}>
          <h1 className={styles.title}>« Tronçonneuse »</h1>
          <p className={styles.subTitle}>Plus de 500 produits trouvés</p>
          <img className={styles.filterImg} src={filter} alt="filter button" />
        </div>
      <div className={styles.cards}>
          <Card2/>
          <Card2/>
      </div>
      <div className={styles.cards2}>
        <Card2/>
        <Card2/>
      </div>
    </div>
  );
}
