import { useExtractColors } from "react-extract-colors";
import { asset } from "../../utils/assets";
import styles from "./HomeFuture.module.css";
const Projet = ({ projet }) => {
  const { title, description, type, slug, photo } = projet;
  const { lighterColor } = useExtractColors(asset(`/photos/${slug}/${photo}`));

  const filter = photoColor(lighterColor);

  console.log(filter);
  return (
    <div className={styles.projet} style={{ boxShadow: filter }}>
      <div className={styles.picture}>
        <img src={asset(`/photos/${slug}/${photo}`)} />
      </div>
      <p className={styles.type}>{type}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const photoColor = (color) => {
  if (!color) {
    return "0px 0px 20px rgba(82, 42, 138, 0.74)";
  }

  const values = color.match(/\d+/g);

  if (!values || values.length < 3) {
    return "0px 0px 20px rgba(0,0,0,0.2)";
  }

  const [r, g, b] = values;

  return `0px 0px 20px rgba(${r}, ${g}, ${b}, 0.7)`;
};
export default Projet;
