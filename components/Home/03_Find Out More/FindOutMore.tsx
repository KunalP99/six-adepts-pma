import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from './find_out_more.module.scss';

const FindOutMore = () => {
  return (
    <section className={styles.container}>
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
  )
}

export default FindOutMore;