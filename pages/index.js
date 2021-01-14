import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD

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
        <section>
          <figure className={styles.containerImg}>
            <img
              className={styles.bannerImg}
              src="/images\W10.png"
              // src={require("../public/images/W10.png?webp")}
              alt="Image de windows 10"
            />
            <figcaption className={styles.figcaption}>
              Join Us or Next.js
            </figcaption>
          </figure>
        </section>
      </main>
=======
>>>>>>> main
    </div>
  );
}
