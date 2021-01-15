import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/ShopLesson.module.css";
import Link from "next/link";

export default function ShopLesson() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors.firstname);

  const url = "https://www.youtube.com/embed/WrWkiojtxWQ?end=5&controls=0";
  return (
    <div className={`container ${styles.pitch}`}>
      <h2 className={styles.title}>Accomplir son destin en 6 étapes.</h2>
      <p className={styles.motivate}>
        Afin d’améliorer les choses dans tous les domaines de la société, la
        Fondation pour le bonheur au travers du code de Benoit, association
        laïque à but non lucratif, qui se trouve en Remote, est devenue le
        centre de coordination des activités à l’échelle mondiale. Grâce au
        soutien de l’Eglise du saint Code, Le chemin du bonheur par le code et
        ses programmes et supports pédagogiques sont aujourd’hui utilisés un peu
        partout dans le monde et aident à inculquer un niveau plus élevé
        d’honnêteté, de confiance et de respect de soi au sein de toutes les
        cultures.
      </p>
      <article className={styles.videoCard}>
        <h2 className={styles.titleVideo}>
          Devenir développeur, apprendre ou avoir la foi ?
        </h2>
        <iframe
          width="auto"
          height="400hvm"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        >
          Pour être il faut croire
        </iframe>
      </article>

      {/* form  */}

      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h3>
          rejoingnez notre programme initiatique pour devenir le meilleur codeur
        </h3>
        <h1 className={styles.h1}>Détache toi de tes biens matériels</h1>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="cardname" className={styles.label}>
              Nom inscrit sur la carte
              <input
                type="text"
                className={styles.input}
                id="cardname"
                name="cardname"
                placeholder="Nom inscrit sur la carte"
                ref={register({
                  required: "Nom",
                  maxLength: {
                    value: 80,
                    message: "Vous ne pouvez pas depassez 80 caractères",
                  },
                })}
              />
              {errors.cardname && (
                <span className={styles.span}>{errors.cardname.message}</span>
              )}
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>
              Numéro de carte
              <input
                type="text"
                className={styles.input}
                id="number"
                name="number"
                placeholder="numéro de carte"
                ref={register({
                  required: "Vous devez entrer vos numéros de carte !",
                  maxLength: {
                    value: 80,
                    message: "Vous ne pouvez pas depassez 80 caractères",
                  },
                })}
              />
              {errors.number && (
                <span className={styles.span}>{errors.number.message}</span>
              )}
            </label>
          </div>
        </div>
      </form>

      <p className={styles.freeMind}>
        Pour accéder à l'illumination détachez vous de vos biens matériels
      </p>
      <div className={styles.paye}>
        <Link href="/coaching/VideoCards">
          <a title="Réussir dans la vie">Se libérer</a>
        </Link>
      </div>
    </div>
  );
}
