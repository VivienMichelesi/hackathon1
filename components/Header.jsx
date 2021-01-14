import styles from "../styles/Header.module.css";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.headerWindows}>
      <Link href="/">
        <img
          src="/images/banniere.png"
          alt="banniere"
          id="windowsBanniere"
        ></img>
      </Link>
    </header>
  );
}
