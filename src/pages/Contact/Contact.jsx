import styles from "./Contact.module.css";
import { asset } from "../../utils/assets";
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
            <div>email</div>
            <a className={styles.link} href="mailto:yann.collindavid@gmail.com">
              yann.collindavid@gmail.com
            </a>
          </div>
          <div>
            <div>instagram</div>
            <a
              className={styles.link}
              href="https://www.instagram.com/yann_dav/"
            >
              @yann_dav
            </a>
          </div>
          <div>
            <div>linkedin</div>
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
