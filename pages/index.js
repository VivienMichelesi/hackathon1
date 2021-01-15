import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join Us or Next.js</title>
        <link rel="icon" href="/windows.png" />
      </Head>
      <main className={styles.main}>
        <figure className={styles.containerImg}>
          <img
            className={styles.bannerImg}
            src="/images\W10.png"
            // src={require("../public/images/W10.png?webp")}
            alt="Image de windows 10"
          />
        </figure>
      </main>
    </div>
  );
}
