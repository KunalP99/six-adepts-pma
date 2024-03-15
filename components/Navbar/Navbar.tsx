import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <p>George King & Six Adepts</p>
        <p>PRIVATE MEMBERS ASSOCIATION</p>
      </div>
      <button>
        <Image
          src={"/menu.svg"}
          width={24}
          height={24}
          alt="Hamburger menu"
        />
      </button>
    </nav>
  )
}

export default Navbar;