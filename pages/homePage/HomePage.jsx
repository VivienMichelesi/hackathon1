import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.container}`}>
      <main className={styles.main}>
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
      </main>
    </div>
  );
}
