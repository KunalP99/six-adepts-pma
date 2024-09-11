import styles from './articles.module.scss';
import { cormorant } from "@/app/font";
import ShortArticle from '@/components/Articles/ShortArticle';
import article from '../article_data/articles';
import { useMemo } from 'react';

interface Article {
  id: number,
  title: string,
  img: string,
  summary: string,
  section: string
}

export default function Articles() {
  const historyArticles = useMemo(() => filterArticlesBySection('history-and-background', article), []);

  const aquarianArticles = useMemo(() => filterArticlesBySection('aquarian-age-sciences', article), []);

  return (
    <div className={styles.articlesContainer}>
      <div className={styles.headingContainer}>
        <h1 className={cormorant.className}>Articles</h1>
        <p>Libero justo laoreet sit amet. Sed tempus urna et pharetra pharetra massa massa.</p>
      </div>
      <div>
        <h2 className={cormorant.className}>1.0 History & Background</h2>
        <div className={styles.shortArticleContainer}>
          {historyArticles}
        </div>
        <h2 className={cormorant.className}>2.0 Aquarian Age Sciences and Developments</h2>
        <div className={styles.shortArticleContainer}>
          {aquarianArticles}
        </div>
      </div>
    </div>
  );
}

function filterArticlesBySection(section: string, shortArticles: Article[]) {
  return shortArticles
    .filter(article => article.section === section)
    .sort((a, b) => a.id - b.id) // Sort by id in ascending order
    .map(({ id, title, img, summary, section }) => (
      <ShortArticle
        id={id}
        key={id}
        title={title}
        img={img}
        summary={summary}
        section={section}
      />
    ));
}
