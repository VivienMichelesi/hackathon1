import styles from "../../styles/APropos.module.css";
import { NextSeo } from "next-seo";

export default function Apropos() {
  return (
    <div className={`container ${styles.container}`}>
      <NextSeo
        title="A propos de nous"
        description="Venez découvrir notre équipe."
      />

      <main className={styles.main}>
        <h1 className={styles.title}>A propos de Ben</h1>
        <figure className={styles.figure}>
          <img
            className={styles.imgApropos}
            src="/images/illumination.png"
            alt="Ben et l'illumination"
          />
          <figcaption className={styles.figcaption}>
            Ben recevant l&apos;illumination de Saint Windows
          </figcaption>
        </figure>
        <p className={styles.text}>
          <strong>Qui est Benoit L. Hubert?</strong>
          <br />
          Notre sauveteur était un utopiste informatien qui à dédier sa vie à
          transmettre sa connaissance à des personnes en recherche d&apos;un
          avenir meilleur. Il est malheuressement limité par un facteur souvent
          rencontré chez les développeurs: il était adorateur de Linux. Une nuit
          cependant, pendant qu&apos;il était en train de régler sa carte son
          pour la 10ème fois, le grand Windows lui est apparu. Ce fut pour lui
          une révélaition, et il se jura de porter à travers le monde entier la
          grandeur de Windows.
        </p>
      </main>
    </div>
  );
}
