import Image from "next/image";
import { cormorant } from "@/app/font";
import styles from './articles.module.scss';
import articles from "@/app/article_data/articles";
import ShortArticle from "@/components/Articles/ShortArticle";

const Articles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
          <h1 className={cormorant.className}>Read Our Articles</h1>
          <div className={styles.viewButton}>
            <button type="button">
              View more
              <i>
                <Image
                  src={"/arrow.svg"}
                  width={24}
                  height={24}
                  alt="View more articles"
                />
              </i>
            </button>
          </div>
        </div>
        <div className={styles.articlesContainer}>
          {articles
            .sort((a, b) => b.id - a.id)
            .map(article => (
              <ShortArticle
                id={article.id}
                key={article.title}
                title={article.title}
                img={article.img}
                summary={article.summary}
                section={article.section}
              />
            )).slice(0, 3)}
        </div>
        <button className={styles.mobileViewButton} type="button">View more</button>
      </div>
    </section>
  )
}

export default Articles;