"use client"
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <div className={styles.emblaSlide}>Slide 1</div>
        <div className={styles.emblaSlide}>Slide 2</div>
        <div className={styles.emblaSlide}>Slide 3</div>
      </div>
    </div>
  )
}

export default Carousel;