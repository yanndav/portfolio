import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <div className={styles.navbar}>
      <div
        to="/"
        className={`${styles.link} ${styles.name}`}
        onClick={(e) => handleHome(e)}
      >
        assemblages
      </div>
      <Link to="/a-propos" className={styles.link}>
        à propos
      </Link>
    </div>
  );
};

export default Navbar;
