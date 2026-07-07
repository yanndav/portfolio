import { hero } from "../../contents/home/hero";
import styles from "./Hero.module.css";
const Hero = ({ slug }) => {
  const { gallery } = hero;
  return (
    <div className={styles.hero}>
      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <a key={index} className={styles.galleryItem} href={`#${item.slug}`}>
            {item.content.type === "image" && (
              <img
                src={`/photos/${item.slug}/${item.content.src}`}
                alt={item.content.alt}
                className={styles.image}
                loading="lazy"
              />
            )}
          </a>
        ))}
      </div>

      <div className={styles.subtitle}>
        <div>
          des <span className={styles.emphasize}>assemblages</span>
        </div>
        <div>de sons, d'images et de textes,</div>
        <div className={styles.smaller}>
          pour raconter des histoires humaines
        </div>
      </div>

      <div className={styles.action}>
        <a href={`/#${slug}`} className={styles.actioncontainer}>
          explorer les projets
        </a>
      </div>
    </div>
  );
};

export default Hero;
