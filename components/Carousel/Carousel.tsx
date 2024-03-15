"use client"
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";
import SingleArticleShort from "./SingleArticleShort";

interface IData {
  data: {
    title: string,
    img: string,
    summary: string
  }[]
}

const Carousel = ({ data }: IData) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {data.map(article => (
          <SingleArticleShort
            key={article.title}
            title={article.title}
            img={article.img}
            summary={article.summary}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel;