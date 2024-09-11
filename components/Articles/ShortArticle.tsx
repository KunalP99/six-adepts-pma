import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from "./short_article.module.scss";
import Link from "next/link";

interface Props {
  id: number
  title: string,
  img: string,
  summary: string,
  section: string
}

const ShortArticle = ({ id, title, img, summary, section }: Props) => {
  return (
    <Link href={`/articles/${id}`} className={styles.articleButton}>
      <div className={styles.imgWrapper}>
        <Image
          src={`/articles/${img}`}
          width={432}
          height={367}
          alt={`${title} article in the ${section} section`}
        />
      </div>

      <div className={styles.headingContainer}>
        <h3 className={cormorant.className}>{title}</h3>
        <div className={styles.underline}></div>
      </div>
      <p>{summary}</p>
    </Link>
  )
}

export default ShortArticle;