import ClickableHouse from "../../Components/Clickable House/ClickableHouse";

import Logo from "../../assets/logo-removebg.png";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <header>
        <div className={styles.headerFirstLine}>
          <img src={Logo} alt="" className={styles.headerLogo} />
          <input
            type="search"
            className={styles.headerSearchForm}
            placeholder="Rechercher un produit, une marque ou un conseil"
            aria-label="Effectuer une recherche sur ManoMano"
            value=""
          />
          <div className={styles.headerConnectBlock}>
            <p className={styles.headerBonjour}>Bonjour</p>
            <p className={styles.headerConnectezVous}>Identifiez-vous</p>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            width="1em"
            viewBox="0 0 24 24"
            className={styles.headerCartLogo}
          >
            <path
              d="M14.8408 11H7.25989L6.14057 13H17.3338C17.8935 13 18.3514 13.45 18.3514 14C18.3514 14.55 17.8935 15 17.3338 15H6.14057C4.59386 15 3.617 13.37 4.35982 12.03L5.73354 9.59L2.07029 2H1.05272C0.493062 2 0.0351562 1.55 0.0351562 1C0.0351562 0.45 0.493062 0 1.05272 0H3.36261L7.69745 9H14.8408L18.1275 2.9C18.3921 2.41 19.0128 2.22 19.5114 2.49C19.9999 2.75 20.1728 3.35 19.9184 3.83L16.6215 9.97C16.2756 10.59 15.604 11 14.8408 11ZM6.14058 16C5.02125 16 4.11562 16.9 4.11562 18C4.11562 19.1 5.02125 20 6.14058 20C7.2599 20 8.17572 19.1 8.17572 18C8.17572 16.9 7.2599 16 6.14058 16ZM16.3163 16C15.1969 16 14.2913 16.9 14.2913 18C14.2913 19.1 15.1969 20 16.3163 20C17.4356 20 18.3514 19.1 18.3514 18C18.3514 16.9 17.4356 16 16.3163 16Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </header>
      <ClickableHouse />
    </div>
  );
}
