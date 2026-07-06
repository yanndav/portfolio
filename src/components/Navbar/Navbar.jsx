import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={`${styles.link} ${styles.name}`}>
        assemblages
      </Link>
      <Link to="/a-propos" className={styles.link}>
        à propos
      </Link>
    </div>
  );
};

export default Navbar;
