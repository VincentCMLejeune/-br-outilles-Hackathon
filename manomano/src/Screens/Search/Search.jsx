import styles from "./Search.module.css";
import logo from "../../Assets/MM_LOGO.png"
import Card from "./Card";

export default function Search() {
  return (
    <div>
      <img className={styles.logoMM} src={logo} alt="Logo Mano Mano"/>
      <h1 className={styles.title}>« Tronçonneuse »</h1>
      <p className={styles.subTitle}>Plus de 500 produits trouvés</p>
      <div className={styles.cards}>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
