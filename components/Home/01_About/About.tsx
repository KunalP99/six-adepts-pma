import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from './about.module.scss';

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.headingContainer}>
          <h1 className={cormorant.className}>Who Are We?</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.textContainer}>
          <p>Based on the work and legacy of Space Intelligences who graced our Planet in the last century. George King who trained himself as a Master of Yoga was used by Higher Forces to act as a channel for Truth to be given to humanity prior to the dawn of the Aquarian Age of Peace and Enlightenment. The Six Adepts carried out battles in the lower astral realms to rid the worst devil that had existed there.</p>
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
  )
}

export default About;