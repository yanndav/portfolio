import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from "./LargeAudioPlayer.module.css";
const LargeAudioPlayer = ({ audio, slug }) => {
  const audiourl = audio ? `/audio/${slug}/${audio}` : null;

  console.log("audiourl", audiourl);
  return (
    <div className={styles.largecontainer}>
      <AudioPlayer
        src={audiourl}
        layout="horizontal-reverse"
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        showJumpControls={false}

        // other props here
      />
    </div>
  );
};

export default LargeAudioPlayer;
