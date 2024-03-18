import Image from "next/image";
import styles from "./home.module.scss";
import { cormorant } from "@/app/font";
import Carousel from "@/components/Carousel/Carousel";
import articleShortHome from "./article_short_data/articleShortHome";

export default function Home() {
  return (
    <main>
      {/* TODO: Use background image property here and remove position absolute on nav bar*/}
      <div className={styles.hero}></div>
      <div className={styles.mainContainer}>

        <section className={styles.aboutContainer}>
          <div className={styles.aboutContentContainer}>
            <div className={styles.headingContainer}>
              <h1 className={cormorant.className}>Who Are We?</h1>
              <div className={styles.underline}></div>
            </div>
            <div className={styles.aboutTextContainer}>
              <p>George King who trained himself as a Master of Yoga was used by Higher Forces to act as a channel for Truth to be given to humanity prior to the dawn of the Aquarian Age of Peace and Enlightenment. The Six Adepts carried out battles in the lower astral realms to rid the worst devil that had existed there.</p>
              <p>The Association&apos;s function is to promote the work of the Six Adepts and carry out tasks as laid down to help bring lasting Peace and prosperity on Earth.</p>
              <p>Those wishing to join need to have a burning desire to work for World Peace. They need to begin by studying the work and sacrifice made by Doctor George King and the Mighty Six Adepts.</p>
            </div>
          </div>
          <Image
            src={"/about-img.png"}
            width={552}
            height={732}
            alt="George King"
          />
        </section>



        <section className={styles.articleContainer}>
          <div className={styles.articleContent}>
            <h1 className={cormorant.className}>Read Our Articles</h1>
            <Carousel data={articleShortHome} />
            <button type="button">View more</button>
          </div>
        </section>

        <section className={styles.findOutMoreContainer}>
          <div className={styles.card}>
            <h1 className={cormorant.className}>Find Out More</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image
              src={"/UFO.png"}
              width={195}
              height={95}
              alt="UFO"
            />
            <button>Get Started</button>
          </div>
        </section>
      </div>
    </main>
  );
}
