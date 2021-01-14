import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Apropos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A propos de Ben</title>
        <link rel="icon" href="/images/windows" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A propos de Ben</h1>
        <figure className={styles.figure}>
          <img
            className={styles.imgApropos}
            src="/images/illumination.png"
            alt="Ben et l'illumination"
          />
          <figcaption className={styles.figcaption}>
            Ben recevant l'illumination de Saint Windows
          </figcaption>
        </figure>
        <p>
          <strong>Qui est Benoit L. Hubert?</strong>
          Notre sauveteur était un utopiste informatien qui à dédier sa vie à
          transmettre sa connaissance à des personnes en recherche d'un avenir
          meilleur. Il est malheuressement limité par un facteur souvent
          rencontré chez les développeurs: il était adorateur de Linux. Une nuit
          cependant, pendant qu'il était en train de régler sa carte son pour la
          10ème fois, le grand Windows lui est apparu. Ce fut pour lui une
          révélaition, et il se jura de porter à travers le monde entier la
          grandeur de Windows.
        </p>
      </main>
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </div>
  );
}
