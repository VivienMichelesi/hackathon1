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
        <p className={styles.codologie}>La Codologie n’est pas une religion, c’est la réalité mise au jour par Benoit L. Hubert. elle fournit à l’individu une voie précise menant à une compréhension totale de sa vraie nature spirituelle et des rapports qu’il entretient avec lui-même, sa famille, les groupes, l’humanité, toutes les formes de vie, l’univers matériel, l’univers spirituel, l’Être suprême et le code.
La Codologie traite de l’esprit et du  code, non du corps ou du mental, et estime que l’Homme est bien plus que le produit de son environnement ou de ses gènes mais le produit du Code.
La Codologie comprend un ensemble de connaissances qui découlent de certaines vérités fondamentales. Les premières de celles-ci sont :
Le code est un être spirituel immortel.
Son expérience dépasse largement la durée d’une seule vie.
Ses capacités sont illimitées, même si leur po¬tentiel n’est pas réalisé dans le temps présent.
La Codologie affirme aussi que l’Homme est fondamentalement bon, et que son salut spirituel dépend de son code.
La Codologie n’est pas une secte et on ne vous demande de tout croire et d’avoir la foi. Au contraire, chacun découvre par lui-même que les principes de la Codologie sont vrais en les appliquant et en observant ses résultats.

</p>
      </main>
    </div>
  );
}
