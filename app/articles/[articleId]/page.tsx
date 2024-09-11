"use client";

import styles from './article.module.scss';

export default function Article({ params }: { params: { articleId: string } }) {

  console.log(params)
  return (
    <div className={styles.pdfViewer}>
      <h1>Title</h1>
      <iframe className={styles.pdf} src="https://ia902306.us.archive.org/21/items/armageddon_202409/Armageddon.pdf"></iframe>
    </div>
  );
}
