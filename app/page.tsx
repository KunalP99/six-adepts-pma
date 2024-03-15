import Image from "next/image";
import styles from "./home.module.scss";
import { cormorant } from "@/app/font";
import Carousel from "@/components/Carousel/Carousel";
import articleShortHome from "./article_short_data/articleShortHome";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}></div>
      <div className={styles.mainContainer}>

        <section className={styles.aboutContainer}>
          <div className={styles.headingContainer}>
            <h1 className={cormorant.className}>Who Are We?</h1>
            <div className={styles.underline}></div>
          </div>
          <p>George King who trained himself as a Master of Yoga was used by Higher Forces to act as a channel for Truth to be given to humanity prior to the dawn of the Aquarian Age of Peace and Enlightenment. The Six Adepts carried out battles in the lower astral realms to rid the worst devil that had existed there.</p>
          <p>The Association&apos;s function is to promote the work of the Six Adepts and carry out tasks as laid down to help bring lasting Peace and prosperity on Earth.</p>
          <p>Those wishing to join need to have a burning desire to work for World Peace. They need to begin by studying the work and sacrifice made by Doctor George King and the Mighty Six Adepts.</p>
          <Image
            className={styles.aboutImg}
            src={"/about-img.png"}
            width={250}
            height={338}
            alt="George King"
          />
        </section>

        <section className={styles.articleContainer}>
          <h1 className={cormorant.className}>Read Our Articles</h1>
          <Carousel data={articleShortHome} />
        </section>
      </div>
    </main>
  );
}
