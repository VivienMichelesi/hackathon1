import styles from "../styles/Header.module.css";
import Link from "next/link";
// import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.headerWindows}>
      <h2 className={styles.name}>Join Us or Next.js</h2>
      <Link href="/">
        <img
          className={styles.windowsBanniere}
          src="/images/banniere.png"
          alt="banniere"
          id="windowsBanniere"
        ></img>
      </Link>
    </header>
  );
}
