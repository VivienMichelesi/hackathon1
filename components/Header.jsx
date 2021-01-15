import styles from "../styles/Header.module.css";
import Link from "next/link";
<<<<<<< HEAD
=======
// import Navbar from "./Navbar";
>>>>>>> a5d1fa6580c1a4d4599d7d745e9f44d998bdc8c1

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
