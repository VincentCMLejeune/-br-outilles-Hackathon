import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./header.module.css"

export default function Header() {

  const [homeVisible, setHomeVisible] = useState(false);


  const [ isPro, setIsPro ] = useState(true);
  
  const handleClick = () => {
    setIsPro(!isPro)
  }
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isPro) {
      navigate("/home")
    } else {
      navigate("/home/pro")
    }
  }, [isPro, navigate]);

  return(

    <div className={styles.header} style={ isPro ? {backgroundColor: "white"}:{backgroundColor:"#204a87"} }>
      <div className={styles.filler} style = {isPro ? {justifyContent: "flex-start"}:{justifyContent: "flex-end"} } onClick={() => handleClick()} >
        <div className={isPro ? styles.hexagonNormal : styles.hexagonPro }></div>
      </div>
        <div className={styles.linkContainer}>
          <div style={homeVisible ? {visibility:"hidden"}:{visibility:"visible"}}>
          <Link to="/home" className={styles.links}>Go to Home Page</Link>
          </div>
          <div style={homeVisible ? {visibility:"hidden"}:{visibility:"visible"}}>
          <Link to="/product" className={styles.links}>Go to Product Page</Link>
          </div>
          <div style = {homeVisible? {visibility:"hidden"}:{visibility:"visible"}}>
          <Link to="/search" className={styles.links}>Go to Search Page</Link>
          </div>
          <button className={styles.button} onClick={() => setHomeVisible(!homeVisible)}>X</button>
        </div>
    </div>
  );
  }