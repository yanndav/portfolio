import styles from "./Footer.module.css";
import { Link } from "react-router";
import { useLocation, useNavigate } from "react-router";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(`/${url}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContact = () => {
    navigate("/contact");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div
      className={styles.footer}
      style={{ scrollSnapAlign: location.pathname === "/" ? "start" : "none" }}
    >
      <div className={styles.link} onClick={() => handleContact()}>
        contact
      </div>
      <div
        className={styles.link}
        onClick={() => handleClick("mentions-legales")}
      >
        mentions légales
      </div>
    </div>
  );
};

export default Footer;
