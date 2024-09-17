"use client";

import styles from './article.module.scss';
import articles from '@/app/article_data/articles';
import { cormorant } from "@/app/font";

export default function Article({ params }: { params: { articleId: string } }) {
  const articleId = parseInt(params.articleId, 10);

  // Find the article with the matching id and return
  const article = articles.find(article => article.id === articleId);

  // TODO: Come up with way to show an article not found
  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className={styles.pdfViewer}>
      <div className={styles.headingContainer}>
        <h2 className={cormorant.className}>{article.title}</h2>
        <p>Written by Natu Patel</p>
        <div className={styles.underline}></div>
      </div>
      <object className={styles.pdf} data={article.url} type="application/pdf">
        <embed src={article.url} type="application/pdf" />
      </object>
    </div>
  );
}
