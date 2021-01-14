import Head from "next/head";
<<<<<<< HEAD
import JoinUS from "./JoinUs";
import styles from "../styles/Home.module.css";
=======
import styles from "../styles/Home.module.css";
import Link from "next/link";
>>>>>>> main

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<<<<<<< HEAD
      <JoinUS />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
=======
      <main className={styles.main}>
        <p className="lienApropos">
          <Link href="/apropos/Apropos">
            <a>A propos</a>
          </Link>
        </p>
      </main>
>>>>>>> main
    </div>
  );
}
