import styles from "./HomeStory.module.css";
import { useNavigate } from "react-router";
import { asset } from "../../utils/assets";
const HomeStory = ({ story }) => {
  const { title, description, gradient, format, slug, photos, type } = story;
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate(`/projet/${slug}`);
  };
  return (
    <div
      className={`${styles.homeStory} ${styles[format]}`}
      style={{
        background: `linear-gradient(${gradient.lighter},${gradient.darker})`,
      }}
      id={slug}
    >
      <div className={`${styles.content} ${styles[format]}`}>
        {photos.map((photo, index) => (
          <div
            className={styles.mediaItem}
            key={index}
            // style={{
            //   gridColumn: `${cont.col} / span ${cont.colSpan}`,
            //   gridRow: `${cont.row} / span ${cont.rowSpan}`,
            // }}
          >
            <img
              src={asset(`/photos/${slug}/${photo.src}`)}
              alt={photo.alt}
              key={index}
            />
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <div className={styles.type}>{type}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descriptionText}>{description}</p>
        <div className={styles.action} onClick={(e) => handleClick(e)}>
          <span className={styles.actioncontainer}>découvrir</span>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
