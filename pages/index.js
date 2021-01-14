import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className="lienApropos">
          <Link href="/apropos/Apropos">
            <a>A propos</a>
          </Link>
        </p>
        <p className="JoinUs">
          <Link href="/JoinUs">
            <a>Nous contacter</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
