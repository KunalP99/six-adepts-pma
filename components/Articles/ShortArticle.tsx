import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from "./short_article.module.scss";

interface Props {
  title: string,
  img: string,
  summary: string
}

const ShortArticle = ({ title, img, summary }: Props) => {
  return (
    <div className={styles.shortArticleContainer}>
      <Image
        src={`/article_short/${img}`}
        width={432}
        height={367}
        alt={`${title} article`}
      />
      <div className={styles.headingContainer}>
        <h3 className={cormorant.className}>{title}</h3>
        <div className={styles.underline}></div>
      </div>
      <p>{summary}</p>
    </div>
  )
}

export default ShortArticle;