import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerWindows}>
      <Link href="/">
        <a title="Revenir sur la page d'accueil" className={styles.link}>
          <h2 className={styles.name}>Join Us or Next.js</h2>
        </a>
      </Link>
    </header>
  );
}
