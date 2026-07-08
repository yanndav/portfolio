import styles from "./Footer.module.css";
import { Link } from "react-router";
import { useLocation } from "react-router";
const Footer = () => {
  const location = useLocation();

  return (
    <div
      className={styles.footer}
      style={{ scrollSnapAlign: location.pathname === "/" ? "start" : "none" }}
    >
      <Link to="/contact">contact</Link>
      <Link to="/a-propos">à propos</Link>
    </div>
  );
};

export default Footer;
