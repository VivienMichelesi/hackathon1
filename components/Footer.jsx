import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.github}>
        <a
          href="https://github.com/crebier-corentin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/17709887?s=460&v=4"
            alt="Corentin Crébier"
            className={styles.logo}
          />
        </a>
        <a
          href="https://github.com/Estampille"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars3.githubusercontent.com/u/70689983?s=460&v=4"
            alt="Maxime D."
            className={styles.logo}
          />
        </a>
        <a
          href="https://github.com/EmilieM71"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars2.githubusercontent.com/u/47183565?s=460&v=4"
            alt="Emilie Martel"
            className={styles.logo}
          />
        </a>
        <a
          href="https://github.com/VivienMichelesi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars0.githubusercontent.com/u/68016078?s=460&v=4"
            alt="Vivien Michelesi"
            className={styles.logo}
          />
        </a>
      </section>
      <section className={styles.reseau}>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/youtube.png"
            alt="youtube"
            className={styles.logo}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/twitter.png"
            alt="twitter"
            className={styles.logo}
          />
        </a>
      </section>
    </footer>
  );
}
