import styles from "./home.module.scss";
import About from "@/components/Home/01_About/About";
import Articles from "@/components/Home/02_Short Articles/ShortArticles";
import FindOutMore from "@/components/Home/03_Find Out More/FindOutMore";

export default function Home() {
  return (
    <main>
      {/* TODO: Use background image property here and remove position absolute on nav bar*/}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <p>Based on the work and legacy of Space Intelligences who graced our Planet in the last century.</p>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <About />
        <Articles />
        <FindOutMore />
      </div>
    </main>
  );
}
