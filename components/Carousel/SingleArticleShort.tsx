import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from "./carousel.module.scss";

export interface ISingleArticle {
  img: string,
  title: string,
  summary: string
}

const SingleArticleShort = ({ title, img, summary }: ISingleArticle) => {
  return (
    <div className={styles.singleArticleShort}>
      <Image
        src={img}
        width={220}
        height={187}
        alt={`${title} article`}
      />
      <div>
        <h3 className={cormorant.className}>{title}</h3>
        <div className={styles.underline}></div>
      </div>
      <p>{summary}</p>
    </div>
  )
}

export default SingleArticleShort;