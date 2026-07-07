import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from "./SmallAudioPlayer.module.css";
const SmallAudioPlayer = ({ audio, slug }) => {
  const audiourl = audio ? `/audio/${slug}/${audio}` : null;

  return (
    <div className={styles.smallcontainer}>
      <AudioPlayer
        src={audiourl}
        layout="horizontal-reverse"
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customProgressBarSection={[]}
        showJumpControls={false}
      />
      <div className={`${styles.text}`}>écouter un extrait</div>
    </div>
  );
};

export default SmallAudioPlayer;
