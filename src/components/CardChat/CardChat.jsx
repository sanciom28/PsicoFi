import React from "react";
import styles from "./CardChat.module.css";
import img from "../../img/photo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function CardChat({name, date}) {
  const {user, setUser}= useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.psico}>
        <picture className={styles.boxImg}>
          <img src={img} alt="" />
        </picture>
        <div className={styles.boxInfo}>
          <Link to ='/' className={styles.link}>
            <h2 className={styles.title}>{name}</h2>
          </Link>
          <p>{date}</p>
        </div>
      </div>
      {user.role =="Paciente" ?(
      <Link to ='/'>
      <button type="button" className={styles.button}>Paciente</button>
      </Link>
      ):(
        <Link to ='/'>
        <button type="button" className={styles.button}>Especialista</button>
        </Link>
      )}

    </div>
  );
};

export default CardChat;