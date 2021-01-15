import styles from "../styles/Header.module.css";
import Link from "next/link";
<<<<<<< HEAD
=======
// import Navbar from "./Navbar";
>>>>>>> 19b5eb2ddc7f60450ef0d6c78661dbbe52f23e96

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
