import { useEffect, useState } from "react";

import Stairs31 from "../../Assets/bibli/stairs-3.webp";
import Stairs31Wood from "../../Assets/bibli/stairs-3wood.webp";
import Stairs41 from "../../Assets/bibli/stairs-4.jpg";
import Stairs41Wood from "../../Assets/bibli/stairs-4wood.webp";

import Classic5 from "../../Assets/bibli/5-1.jpg";
import Classic5Wood from "../../Assets/bibli/5-1wood.webp";
import Classic6 from "../../Assets/bibli/6-1.webp";
import Classic6Wood from "../../Assets/bibli/6-1wood.webp";
import Classic8 from "../../Assets/bibli/8-1.webp";
import Classic8Wood from "../../Assets/bibli/8-1wood.webp";

import Classic31 from "../../Assets/bibli/3-1.webp";
import Classic31Wood from "../../Assets/bibli/3-1wood.webp";
import Classic32 from "../../Assets/bibli/3-2.jpg";
import Classic32Wood from "../../Assets/bibli/3-2wood.jpg";

import Classic42 from "../../Assets/bibli/4-2.jpg";
import Classic42Wood from "../../Assets/bibli/4-2wood.webp";
import Classic43 from "../../Assets/bibli/4-3.webp";
import Classic43Wood from "../../Assets/bibli/4-3wood.jpg";

import styles from "./ProductFilter.module.css";

export default function ProductFilter() {
  const [imgSrc, setImgSrc] = useState("");
  const [furnitureType, setFurnitureType] = useState("");
  const [furniture, setFurniture] = useState("");
  const [rows, setRows] = useState("");
  const [wood, setWood] = useState(false);

  useEffect(() => {
    if (furniture === "stairs-3") {
      if (wood === true) {
        setImgSrc(Stairs31Wood);
      } else {
        setImgSrc(Stairs31);
      }
    } else if (furniture === "stairs-4") {
      if (wood === true) {
        setImgSrc(Stairs41Wood);
      } else {
        setImgSrc(Stairs41);
      }
    } else if (furniture === "classic-5") {
      if (wood === true) {
        setImgSrc(Classic5Wood);
      } else {
        setImgSrc(Classic5);
      }
    } else if (furniture === "classic-6") {
      if (wood === true) {
        setImgSrc(Classic6Wood);
      } else {
        setImgSrc(Classic6);
      }
    } else if (furniture === "classic-8") {
      if (wood === true) {
        setImgSrc(Classic8Wood);
      } else {
        setImgSrc(Classic8);
      }
    } else if (furniture === "classic-31") {
      if (wood === true) {
        setImgSrc(Classic31Wood);
      } else {
        setImgSrc(Classic31);
      }
    } else if (furniture === "classic-32") {
      if (wood === true) {
        setImgSrc(Classic32Wood);
      } else {
        setImgSrc(Classic32);
      }
    } else if (furniture === "classic-42") {
      if (wood === true) {
        setImgSrc(Classic42Wood);
      } else {
        setImgSrc(Classic42);
      }
    } else if (furniture === "classic-43") {
      if (wood === true) {
        setImgSrc(Classic43Wood);
      } else {
        setImgSrc(Classic43);
      }
    }
  }, [furniture, wood]);

  return (
    <div className={styles.productFilterContainer}>
      <h2 className={styles.clickableHouseTitle}>Je veux une bibliothèque !</h2>
      <p className={styles.clickableHouseSubtitle}>
        Mais laquelle ? Testez nos filtres !
      </p>

      <div className={styles.mainFeatureProductFilterContainer}>
        <div className={styles.productFilterPictureContainer}>
          <img src={imgSrc} className={styles.biblioPicture} alt="" />
        </div>
        <div className={styles.productFilterForm}>
          <h3>Forme</h3>
          <div className={styles.optionSelector}>
            <button
              className={styles.optionButton}
              onClick={() => setFurnitureType("pyramide")}
            >
              Pyramide
            </button>
            <button
              className={styles.optionButton}
              onClick={() => setFurnitureType("etagere")}
            >
              Etagère
            </button>
          </div>

          {furnitureType === "pyramide" && (
            <>
              <div className={styles.optionsLabel}>Nombre d'étages</div>
              <div className={styles.optionSelector}>
                <button
                  className={styles.optionButton}
                  onClick={() => setFurniture("stairs-3")}
                >
                  3
                </button>
                <button
                  className={styles.optionButton}
                  onClick={() => setFurniture("stairs-4")}
                >
                  4
                </button>
              </div>
            </>
          )}

          {furnitureType === "etagere" && (
            <>
              <div className={styles.optionsLabel}>Nombre d'étages</div>
              <div className={styles.optionSelector}>
                <button
                  className={styles.optionButton}
                  onClick={() => setRows(3)}
                >
                  3
                </button>
                <button
                  className={styles.optionButton}
                  onClick={() => setRows(4)}
                >
                  4
                </button>
                <button
                  className={styles.optionButton}
                  onClick={() => {
                    setRows(5);
                    setFurniture("classic-5");
                  }}
                >
                  5
                </button>
                <button
                  className={styles.optionButton}
                  onClick={() => {
                    setRows(6);
                    setFurniture("classic-6");
                  }}
                >
                  6
                </button>
                <button
                  className={styles.optionButton}
                  onClick={() => {
                    setRows(8);
                    setFurniture("classic-8");
                  }}
                >
                  8
                </button>
              </div>
              {rows === 3 && (
                <>
                  <div className={styles.optionsLabel}>Nombre de rangées</div>
                  <div className={styles.optionSelector}>
                    <button
                      className={styles.optionButton}
                      onClick={() => setFurniture("classic-31")}
                    >
                      1
                    </button>
                    <button
                      className={styles.optionButton}
                      onClick={() => setFurniture("classic-32")}
                    >
                      2
                    </button>
                  </div>
                </>
              )}
              {rows === 4 && (
                <>
                  <div className={styles.optionsLabel}>Nombre de rangées</div>
                  <div className={styles.optionSelector}>
                    <button
                      className={styles.optionButton}
                      onClick={() => setFurniture("classic-42")}
                    >
                      2
                    </button>
                    <button
                      className={styles.optionButton}
                      onClick={() => setFurniture("classic-43")}
                    >
                      3
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          <div className={styles.woodOption}>
            Effet bois{" "}
            <input
              name="isGoing"
              type="checkbox"
              onChange={() => setWood(!wood)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
