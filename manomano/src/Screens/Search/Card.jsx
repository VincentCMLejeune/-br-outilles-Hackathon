import styles from "./Search.module.css";

import chainSaw from "../../Assets/Tronçonneuse.jpg";
import timberpro from "../../Assets/timberproLogo.png";
import stars from "../../Assets/stars.png";
import price from "../../Assets/price.png";

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.images}>
                <img className={styles.chainSaw} src={chainSaw} alt="tronçonneuse"/>
                <img className={styles.timberpro} src={timberpro} alt="timberpro Logo"/>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.cardTitle}>Tronçonneuse thermique 62 cm3, guide 50 cm, 2 chaines + housse de transport</h1>
                <img className={styles.starsImg} src={stars} alt="stars"/>
                <img className={styles.pr} src={price} alt="price"/>
            </div>
        </div>
    )
}