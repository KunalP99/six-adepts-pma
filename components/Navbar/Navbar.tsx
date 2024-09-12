import Image from "next/image";
import Link from "next/link";
import { cormorant } from "@/app/font";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.mobileNav}>
        <div className={styles.logo}>
          <p className={cormorant.className}>George King & Six Adepts</p>
          <p>PRIVATE MEMBERS ASSOCIATION</p>
        </div>
        <button type="button">
          <Image
            src={"/menu.svg"}
            width={24}
            height={24}
            alt="Hamburger menu"
          />
        </button>
      </nav>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <p className={cormorant.className}>George King & Six Adepts</p>
          <p>PRIVATE MEMBERS ASSOCIATION</p>
        </div>
        <div className={styles.menu}>
          <ul>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="#">Activities</Link></li>
            <li><Link href="#">Membership</Link></li>
            <li><Link href="#">Master George King</Link></li>
            <li><Link href="#">Six Adepts</Link></li>
          </ul>
          <div className={styles.buttonContainer}>
            <div className={styles.line}></div>
            <button>Enquire</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;