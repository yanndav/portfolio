import styles from "./HomeStory.module.css";
import SmallAudioPlayer from "../Stories/SmallAudioPlayer";
import { useNavigate } from "react-router";
import { asset } from "../../utils/assets";
const HomeStory = ({ story }) => {
  const { title, description, gradient, format, slug, content, type } = story;
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
        {content.map((cont, index) => (
          <div
            className={styles.mediaItem}
            style={{
              gridColumn: `${cont.col} / span ${cont.colSpan}`,
              gridRow: `${cont.row} / span ${cont.rowSpan}`,
            }}
          >
            {cont.type === "photo" ? (
              <img src={asset(`/photos/${slug}/${cont.src}`)} key={index} />
            ) : (
              <SmallAudioPlayer audio={cont.src} slug={slug} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <div>{type}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.action} onClick={(e) => handleClick(e)}>
          <span className={styles.actioncontainer}>découvrir</span>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
