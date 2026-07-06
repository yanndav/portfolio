import Text from "../../components/Stories/Text";
import LargeAudioPlayer from "../../components/Stories/LargeAudioPlayer";
import styles from "./PhotoAudio.module.css";
import PhotoGallery from "../../components/Stories/PhotoGallery";
import Title from "../../components/Stories/Title";
const PhotoAudio = ({ photos, audio, text, slug, title, onColorChange }) => {
  return (
    <div className={styles["photo-audio"]}>
      <Title title={title} />
      <PhotoGallery photos={photos} slug={slug} onColorChange={onColorChange} />
      <Text text={text} />
      <LargeAudioPlayer audio={audio} slug={slug} />
    </div>
  );
};

export default PhotoAudio;
