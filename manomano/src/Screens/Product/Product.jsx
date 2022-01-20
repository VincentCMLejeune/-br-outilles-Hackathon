import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Collapsible from 'react-collapsible';

import styles from "./Product.module.css";

import 'swiper/css';
import 'swiper/css/bundle';

import payment from './PaymentOpt.png';
import Installation from './Bathtub/InstallationPro.png';
import Dimensions from './Bathtub/Dimensions.webp';
import otherProducts from './Bathtub/OtherProducts.png';
import bathtub1 from './Bathtub/bathtub1.png';
import bathtub2 from './Bathtub/bathtub2.png';
import bathtub3 from './Bathtub/bathtub3.png';
import bathtub4 from './Bathtub/bathtub4.png';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Product() {
  return (
    <div className={styles.mainProductPage}>
      <div className={styles.Section1}>
        <div className={styles.ProductImgs}>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
          }} pagination={{
          "clickable": true
          }} navigation={true}>
            <SwiperSlide><img src={bathtub1} alt="baignoire 1" /></SwiperSlide>
            <SwiperSlide><img src={bathtub2} alt="baignoire 2" /></SwiperSlide>
            <SwiperSlide><img src={bathtub3} alt="baignoire 3" /></SwiperSlide>
            <SwiperSlide><img src={bathtub4} alt="baignoire 4" /></SwiperSlide>
          </Swiper>
          <p>Besoin d'un coup de main pour choisir ? <a href="https://www.manomano.fr/comparatifs/baignoire-121">Voici un guide pour vous aider.</a></p>
        </div>
      </div>
      <div className={styles.Section2}>
        <div className={styles.headerProductPage}>
          <p>REF TIXM252BI | ME33639068</p>
          <div className={styles.ProductRef}>
            <h2>Baignoire autoportante au design moderne et îlot indépendant Tilos</h2>
           <h6>✅  En Stock</h6>
          </div>
          <div className={styles.productRef2}>
            <div className={styles.ProductPrices}>
              <p>1 099,95€</p>
              <h6>- 27%</h6>
              <h5>799€<span id={styles.exponant}>95</span></h5>
            </div>
            <button className={styles.addToCart}>Ajouter au panier</button>
          </div>
        </div>
        <div className={styles.Payment}>
        <img src={payment} alt="payment options"/>
        </div>
        <div className={styles.ShippingDetails}>
        <h5>Options de livraison</h5>
        <p>A domicile : entre le 24.01 et le 26.01 si vous commandez avant 19h</p>
        <p>🇫🇷 🇧🇪 En France et en Belgique</p>
        <p>Vendu par Produce Shop</p>
        <img src={Installation} alt="Option Installation" />
      </div>
      
      <div className={styles.ProductDesc}>
        <table className={styles.attributes}>
          <thead>
            <tr>
              <th>Caractéristiques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id={styles.RowName}>Couleur</td>
              <td>Blanc</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Matière</td>
              <td>Acrylique</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Style</td>
              <td>Retro</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Garantie</td>
              <td>1 an</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.DescPros}>
          <h4>Les + du produit</h4>
          <li>3 couches de fibre de verre résistantes aux températures élevées et basses</li>
          <li>Design moderne</li>
          <li>Créez un coin de détente parfait</li>
        </div>
        <div className={styles.DescIntro}>
          <h4>Description</h4>
          <p>La dernière tendance en matière d'ameublement de salle de bain sont les baignoires autoportantes qui s'inspirent du style et du goût rétro au profit d'un design moderne pour vous permettre de meubler la salle de bain de manière hautement esthétique et fonctionnelle.</p>
          <Collapsible trigger="➕ En savoir plus">
            <p>La baignoire îlot Tilos proposée dans le catalogue de meubles et accessoires de salle de bain Arati est conçue pour devenir un véritable protagoniste des salles de bain modernes. En plus d'être extrêmement confortable, la baignoire Tilos est un véritable meuble qui s'intègre parfaitement dans un environnement au design épuré : le caractère élégant et la forme particulière de cette baignoire îlot vous permettent de la placer dans n'importe quel espace de la maison, par exemple, dans une chambre, au centre d'une grande pièce ou sous une grande fenêtre donnant sur la mer, permettant à votre salle de bain d'être à la fois chaleureuse et accueillante.

La conception est conçue pour répartir le poids de manière adéquate et extrêmement fonctionnelle, avec une vanne de vidange centrale et un dossier confortable et bien formé qui se rétrécit progressivement d'un côté pour prendre la forme d'une larme. La surface externe de la baignoire est faite d'une couche d'acrylique blanc de premier choix qui, en raison de sa résistance particulière aux abrasions et aux détergents les plus agressifs, maintient la surface de la baignoire lisse et brillante pendant longtemps, permettant également une hygiène parfaite et rapide. La structure interne est au contraire renforcée par trois couches de fibre de verre qui garantissent une isolation thermique optimale et assurent une parfaite solidité.

Star incontestée des salles de bains au design moderne, la baignoire Tilos par Arati donnera à votre salle de bain cette touche d'originalité qui peut sublimer le mobilier environnant, tout en assurant la détente que vous méritez.

ProduceShop sélectionne uniquement les meilleurs produits pour chaque catégorie en fonction de caractéristiques strictement qualitatives et esthétiques dans le but de ne distribuer sur le marché que des articles capables de satisfaire pleinement les besoins de ses clients.</p>
          </Collapsible>
        </div>
        <div className={styles.TechnicalAttributes}>
          <Collapsible trigger="➕ Caractéristiques techniques">
          <li>Dimensions : 170 x 88 x 56 cm (largeur, longueur, hauteur)</li>
          <li>Matériau : acrylique sanitaire, résine</li>
          <li>3 couches de fibre de verre résistantes aux températures élevées et basses</li>
          <li>Pop up robinet de vidange central</li>
          <li>Diamètre d'échappement : 50 mm</li>
          <li>Couleur blanche brillante</li>
          <li>Trop plein d'acier</li>
          <li>Design moderne</li>
          <li>Créez un coin de détente parfait</li>
          <img src={Dimensions} alt="Product dimensions" />
          </Collapsible>
        </div> 
        </div>
        <div className={styles.otherProducts}>
        <p>Vous hésitez encore ? <a href="https://www.manomano.fr/comparatifs/baignoire-121">Voici un guide pour vous aider à choisir.</a></p>
        <img src={otherProducts} alt="Other Products recommanded" />
        </div>       
      </div>
    </div>
  );
}
