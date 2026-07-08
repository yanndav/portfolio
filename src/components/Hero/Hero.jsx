import { hero } from "../../contents/home/hero";
import styles from "./Hero.module.css";
import { HashLink } from "react-router-hash-link";
import { asset } from "../../utils/assets";

const Hero = ({ slug }) => {
  const { gallery } = hero;
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <HashLink
            key={index}
            className={styles.galleryItem}
            smooth
            to={`#${item.slug}`}
          >
            {item.content.type === "image" && (
              <img
                src={asset(`/photos/${item.slug}/${item.content.src}`)}
                alt={item.content.alt}
                className={styles.image}
                loading="lazy"
              />
            )}
          </HashLink>
        ))}
      </div>

      <div className={styles.subtitle}>
        <div>
          des <span className={styles.emphasize}>assemblages</span>
        </div>
        <div>d'images, de textes et de sons</div>
        <div className={styles.smaller}>
          pour raconter des histoires humaines
        </div>
      </div>

      <div className={styles.action}>
        <HashLink smooth to={`/#${slug}`} className={styles.actioncontainer}>
          explorer les projets
        </HashLink>
      </div>
    </div>
  );
};

export default Hero;
