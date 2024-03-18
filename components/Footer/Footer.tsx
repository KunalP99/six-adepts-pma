import Link from "next/link";
import styles from "./footer.module.scss";
import { cormorant } from "@/app/font";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <div className={styles.about}>
            <h3 className={cormorant.className}>About</h3>
            <nav className={styles.menu}>
              <ul>
                <li><Link href="#">Articles</Link></li>
                <li><Link href="#">Activities</Link></li>
                <li><Link href="#">Membership</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.legal}>
            <h3 className={cormorant.className}>Legal</h3>
            <nav className={styles.menu}>
              <ul>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Cookies</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.action}>
          <div className={styles.content}>
            <p className={styles.text}>If you are interested in joining our cause, enquire today!</p>
            <button type="button">Enquire</button>
          </div>
          <div className={styles.logo}>
            <p className={cormorant.className}>George King & Six Adepts</p>
            <p>PRIVATE MEMBERS ASSOCIATION</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer;