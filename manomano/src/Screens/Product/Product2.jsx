import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Collapsible from 'react-collapsible';

import styles from "./Product.module.css";

import 'swiper/css';
import 'swiper/css/bundle';

import payment from './PaymentOpt.png';
import rating from './Chainsaw/ratings.png'
import deliveryOpt from './Chainsaw/deliveryChainsaw.png';
import otherProducts from './Chainsaw/OtherProductsChainsaw.png';
import Chainsaw1 from './Chainsaw/Chainsaw1.png';
import Chainsaw2 from './Chainsaw/Chainsaw2.png';
import Chainsaw3 from './Chainsaw/Chainsaw3.png';


SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Product2() {
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
            <SwiperSlide><img src={Chainsaw1} alt="chainsaw 1" /></SwiperSlide>
            <SwiperSlide><img src={Chainsaw2} alt="chainsaw 2" /></SwiperSlide>
            <SwiperSlide><img src={Chainsaw3} alt="chainsaw 3" /></SwiperSlide>
        
          </Swiper>
          <p>Besoin d'un coup de main pour choisir ? <a href="https://www.manomano.fr/comparatifs/baignoire-121">Voici un guide pour vous aider.</a></p>
        </div>
      </div>
      <div className={styles.Section2}>
        <div className={styles.headerProductPage}>
          <p>REF 58-BIS | ME343842</p>
          <div className={styles.ProductRef}>
            <h2>Tronçonneuse thermique 58 cm3, 3.5 CV, guide 50 cm, 2 chaînes</h2>
           <h6>✅  En Stock</h6>
           <img src={rating} alt='Star ratings' id={styles.ratings}/>
          </div>
          <div className={styles.productRef2}>
            <div className={styles.ProductPrices}>
              <p>169,80€</p>
              <h6>- 35%</h6>
              <h5>109€<span id={styles.exponant}>80</span></h5>
            </div>
            <button className={styles.addToCart}>Ajouter au panier</button>
          </div>
        </div>
        <div className={styles.Payment}>
        <img src={payment} alt="payment options"/>
        </div>
        <div className={styles.ShippingDetails}>
        <img src={deliveryOpt} alt="delivery options" id={styles.deliveryOpt} />
        <li>À domicile le 24/01/2022 pour toute commande passée avant 17 h - Livraison gratuite</li>
        <li>À domicile le 21/01/2022 pour toute commande passée avant 17 h</li>
        <li>En point relais le 22/01/2022 pour toute commande passée avant 15 h - Livraison gratuite</li>
        <li>En point relais le 21/01/2022 pour toute commande passée avant 15 h</li>
        <p>🇫🇷 En France uniquement</p>
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
              <td id={styles.RowName}>Longueur du guide</td>
              <td>50 cm</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Cylindrée du moteur</td>
              <td>58 cm3</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Puissance</td>
              <td>3.5 CV</td>
            </tr>
            <tr>
              <td id={styles.RowName}>Garantie</td>
              <td>2 ans</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.DescPros}>
          <h4>Les + du produit</h4>
          <li>Démarrage facile</li>
          <li>Livraison Rapide</li>
          <li>Marque Française</li>
        </div>
        <div className={styles.DescIntro}>
          <h4>Description</h4>
          <p>Tronçonneuse alliant légèreté, maniabilité et puissance. Idéale pour l'élagage, le débitage de bois de chauffage et l'abattage d'arbres de petite et moyenne taille. Cette tronçonneuse est équipée d'un lanceur bénéficiant du système Easy-Start pour un démarrage facile et sans effort.</p>
          <Collapsible trigger="➕ En savoir plus">
            <p>Caractéristiques techniques :

- Marque française : GT GARDEN
- Moteur : 2 temps refroidi par air
- Homologation : CE, TÜV, GS
- Cylindrée : 58 cm3
- Puissance : 3.5 CV (2.6 kW)
- Longueur du guide : 50 cm (20 pouces)
- Chaîne : 2 chaînes 76 maillons 0.325 - 1.5
- Graissage de la chaîne : Automatique
- Dispositif de démarrage facile
- Carburant : Mélange SP98 (E5) + 2,5% d'huile de synthèse pour moteur 2 temps
- Volume du réservoir d'essence : 550 ml
- Volume du réservoir d'huile : 260 ml
- Poids : 6.4 kg (poids total hors carburant)
- Notice en Français : Oui

Contenu du colis :

Tronçonneuse 58 cm3
2 chaînes affûtées
Lime à chaîne
Bidon pour mélange
Clé à bougie et tournevis
Protège guide

Garantie et livraison :

Garantie : 2 ans, SAV en France
Pièces de rechange en stock permanent
Livraison rapide
GT GARDEN est une marque connue pour la qualité de ses machines et sa gamme complète de pièces détachées. Retrouvez l'ensemble de nos articles en tapant GT GARDEN dans la barre de recherche ManoMano.</p>
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
          {/* <img src={Dimensions} alt="Product dimensions" /> */}
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
