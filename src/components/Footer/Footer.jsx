import styles from "./Footer.module.css";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/contact">contact</Link>
      <Link to="/a-propos">à propos</Link>
    </div>
  );
};

export default Footer;
