import { useNavigate } from "react-router";
import styles from "./Search.module.css";

import bathtub from "../../Screens/Product/Bathtub/bathtub1.png";
import stars from "../../Assets/stars.png";
import price from "../../Assets/price.png";
import brand from "../../Assets/bathtubBrand.png";

export default function Card() {
    let navigate = useNavigate();
    return (
        <div className={styles.cardContainer}>
            <div className={styles.images}>
                <img className={styles.chainSaw} src={bathtub} alt="baignoire"/>
                <img className={styles.imexBrand} src={brand} alt="Imex Logo"/>
            </div>
            <div onClick={()=> navigate('/product')} className={styles.rightSide}>
                <h1 onPress className={styles.cardTitle}>Baignoire autoportante au design moderne et îlot indépendant Tilos</h1>
                <img className={styles.starsImg} src={stars} alt="stars"/>
                <img className={styles.price} src={price} alt="price"/>
            </div>
        </div>
    )
}