"use client"
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { cormorant } from "@/app/font";

interface ISingleArticle {
  img: string,
  alt: string,
  title: string,
  summary: string
}

const Carousel = ({ img, alt, title, summary }: ISingleArticle) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <div className={styles.singleArticle}>
          <Image
            src={"/articles/pyramid-exploration.png"}
            width={220}
            height={187}
            alt="Pyramid Exploration article"
          />
          <div>
            <h3 className={cormorant.className}>Pyramid Exploration</h3>
            <div className={styles.underline}></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

    </div>
  )
}

export default Carousel;