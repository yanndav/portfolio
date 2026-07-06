import { useParams } from "react-router-dom";
import { stories } from "../../contents/stories/stories.jsx";
import styles from "./Story.module.css";
import PhotoAudio from "../../layout/Stories/PhotoAudio";
import { useState } from "react";

const Story = () => {
  const { slug } = useParams();
  const story = stories.find((story) => story.slug === slug);
  const photos = story ? story?.content?.photos : [];
  const audio = story ? story?.content?.audio : null;
  const title = story ? story?.title : "Story not found";
  const [dominantColor, setDominantColor] = useState("#C4AF90");
  const [darkerColor, setDarkerColor] = useState("#423629");
  const text = story ? story?.content?.text : null;

  const handleColorChange = (newDominantColor, newDarkerColor) => {
    setDominantColor(newDominantColor);
    setDarkerColor(newDarkerColor);
  };

  return (
    <div
      className={styles.story}
      style={{ background: `linear-gradient(${dominantColor},${darkerColor})` }}
    >
      {story
        ? story.content.format === "photo-audio" && (
            <PhotoAudio
              title={title}
              photos={photos}
              audio={audio}
              text={text}
              slug={slug}
              onColorChange={handleColorChange}
            />
          )
        : "Story not found"}
    </div>
  );
};

export default Story;
