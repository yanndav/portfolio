import { encours } from "../../contents/home/encours";
import styles from "./HomeFuture.module.css";
import Projet from "./Projet";
const HomeFuture = () => {
  return (
    <div className={styles.encours}>
      <div className={styles.presentation}>
        <h2 className={styles.sectionTitre}>à venir</h2>
        <div className={styles.sousTitre}>
          Des récits bientôt prêts. Pour l'instant, ils mûrissent
          tranquillement.
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
