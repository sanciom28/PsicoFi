import React from "react";
import styles from "./CardStory.module.css";
import img from "../../img/photo.png";
import { Link } from "react-router-dom";
function CardStory(params) {
  return (
    <div className={styles.container}>
      <div className={styles.psico}>
        <picture className={styles.boxImg}>
          <img src={img} alt="" />
        </picture>
        <div className={styles.boxInfo}>
          <Link className={styles.link}>
            <h2 className={styles.title}>{params.name}</h2>
          </Link>
          <p>{params.date}</p>
        </div>
      </div>
      <Link to ='/' className={styles.link} >
      <button type="button" className={styles.button}>Ver Historia</button>
      </Link>
    </div>
  );
};

export default CardStory;