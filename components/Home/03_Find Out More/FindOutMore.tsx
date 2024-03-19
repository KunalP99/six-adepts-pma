import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from './find_out_more.module.scss';

const FindOutMore = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1 className={cormorant.className}>Find Out More</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className={styles.button}>Get Started</button>
        </div>
        <Image
          src={"/UFO.png"}
          width={467}
          height={192}
          alt="UFO"
        />
        <button className={styles.mobileButton}>Get Started</button>
      </div>
    </section>
  )
}

export default FindOutMore;