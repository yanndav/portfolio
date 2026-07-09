import styles from "./Contact.module.css";
import { asset } from "../../utils/assets";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.information}>
        <div className={styles.presentation}>
          <p>
            Avec <span className={styles.rassemblages}>rassemblages</span>, il y
            a le souhait de collecter et de connecter des récits. Raconter la
            multiplicité du vivant et des humanités en son sein. Démultiplier
            les capteurs sensibles à travers la photographie, l'enregistrement
            sonore, la vidéo et l'écriture. En espérant que le partage parle.
          </p>
          <p>Derrière cet espace virtuel, il y a un humain, Yann.</p>
        </div>
        <div className={styles.contact}>
          <div>
            <BsMailbox />
            <a className={styles.link} href="mailto:yann.collindavid@gmail.com">
              yann.collindavid@gmail.com
            </a>
          </div>
          <div>
            <BsInstagram />
            <a
              className={styles.link}
              href="https://www.instagram.com/yann_dav/"
            >
              @yann_dav
            </a>
          </div>
          <div>
            <BsLinkedin />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/ydavid/"
            >
              Yann David
            </a>
          </div>
        </div>
      </div>
      <div className={styles.pictures}>
        <img src={asset("/photos/l-histoire-recommencement/DSC05339.jpeg")} />
        <img src={asset("/photos/chronique-d-egypte/DSC08696.jpg")} />
        <img src={asset("/photos/insomnies-rurales/P1000475.jpeg")} />
      </div>
    </div>
  );
};

export default Contact;
