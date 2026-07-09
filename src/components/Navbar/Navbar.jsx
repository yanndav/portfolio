import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
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
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      navigate("/");
      requestAnimationFrame(() => {
        document.getElementById("hero")?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      });
    }
  };
  useEffect(() => {
    setVisible(true);
  }, [location]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // user scrolls down
        setVisible(false);
      } else {
        // user scrolls up
        setVisible(true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  useEffect(() => {
    let lastTouchY = 0;

    const handleTouchStart = (e) => {
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;

      if (currentY < lastTouchY) {
        setVisible(false); // finger moves up = scrolling down
      } else {
        setVisible(true); // finger moves down = scrolling up
      }

      lastTouchY = currentY;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}
    >
      <div
        className={`${styles.link} ${styles.name}`}
        onClick={(e) => handleHome(e)}
      >
        rassemblages
      </div>
      <Link to="/a-propos" className={styles.link}>
        à propos
      </Link>
    </div>
  );
};

export default Navbar;
