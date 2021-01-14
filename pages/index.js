import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join Us or Next.js</title>
        <link rel="icon" href="/windows.png" />
      </Head>
    </div>
  );
}
