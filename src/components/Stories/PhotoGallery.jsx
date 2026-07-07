import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import styles from "./PhotoGallery.module.css";
import { useExtractColors } from "react-extract-colors";
import { asset } from "../../utils/assets";

const PhotoGallery = ({ photos, slug, onColorChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = asset(`/photos/${slug}/${photos[activeIndex]}`);

  const { dominantColor, darkerColor } = useExtractColors(image);

  useEffect(() => {
    onColorChange(dominantColor, darkerColor);
  }, [dominantColor, darkerColor, onColorChange]);

  return (
    <Swiper
      modules={[Mousewheel, FreeMode]}
      spaceBetween={20}
      slidesPerView="auto"
      freeMode={true}
      mousewheel={true}
      centeredSlides={false}
      className={styles.mainSwiper}
      slidesOffsetBefore={50}
      slidesOffsetAfter={50}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <img
            src={asset(`/photos/${slug}/${photo}`)}
            className={styles.image}
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
