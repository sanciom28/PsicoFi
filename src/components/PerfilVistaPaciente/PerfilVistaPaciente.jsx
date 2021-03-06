import { useHistory } from "react-router-dom";
import styles from "./PerfilVistaPaciente.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Footer from "../Footer/Footer"
import start from "../../img/start.png"

const PerfilVistaPaciente = ({id,name,birthday,pais,description,photo,problemas,ratings, incidencias}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  let total = ratings.reduce((a, b) => a + b, 0);

  const handdleAppointment = () => {
    !!user ? history.push(`/reservarCita/${id}`): history.push("/register") ;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.firstBox}>
            <div className={styles.boxAtribute}>
              <h1 className={styles.name}>{name}</h1>
              <div className={styles.atribute}>
                <h3 className={styles.title}>Fecha de nacimiento: </h3>
                <p className={styles.text}>{birthday}</p>

                <h3 className={styles.title}>Valoracion: </h3>
                <div className={styles.estrella}>
                  <p className={`${styles.text} ${styles.text1}`}>
                    {(total / ratings.length).toFixed(1)}
                    <img src={start} alt="" />
                  </p>
                </div>

                <h3 className={styles.title}>Lugar de residencia: </h3>
                <p className={styles.text}>{pais}</p>

                <h3 className={styles.title}>Biografia: </h3>
                <p className={`${styles.text} ${styles.description}`}>
                  {description}
                </p>
              </div>
            </div>

            <picture className={styles.boxImg}>
              <img src={photo} alt="" />
            </picture>
          </div>

          <div className={styles.boxEspecialidades}>
            <h3>Especialidades:</h3>
            <div className={styles.especialidades}>
              {!!problemas &&
                problemas.map((pro) => (
                  <div className={styles.especialidad}>
                    <p>{pro.toUpperCase()}</p>
                  </div>
                ))}

              {/* <div className={styles.especialidad}>
              <p>Ansiedad</p>
            </div>
            <div className={styles.especialidad}>
              <p>Estr??s</p>
            </div>
            <div className={styles.especialidad}>
              <p>Autoestima</p>
            </div> */}
            </div>
          </div>
          <div className={styles.feedback}>
            {!!incidencias &&
              incidencias.map((inc) => (
                <div className={styles.incidencia}>
                  <p className={styles.quote}>{inc.description}</p>
                  <p>- {inc.name}</p>
                </div>
              ))}
          </div>
          <button
            className={styles.button}
            onClick={handdleAppointment}
            type="button"
          >
            Solicitar consulta
          </button>
          <p className={styles.textAdvert}>
            Cada cita posee una duraci??n de una (1) hora, y tiene un valor de
            $29.99 USD. Debe agendar su cita con al menos 24 horas de
            antelaci??n, en un bloque de horario que el psic??logo tenga a
            disposici??n.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PerfilVistaPaciente;
