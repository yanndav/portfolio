import { encours } from "../../contents/home/encours";
import styles from "./HomeFuture.module.css";
import Projet from "./Projet";
const HomeFuture = () => {
  return (
    <div className={styles.encours}>
      <div className={styles.presentation}>
        <h2 className={styles.sectionTitre}>projets en cours</h2>
        <div className={styles.sousTitre}>
          Ils seront bientôt prêts, mais pour l'instant ils murissent.
        </div>
      </div>

      <div className={styles.projets}>
        {encours.map((projet) => (
          <Projet projet={projet} key={projet.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeFuture;
