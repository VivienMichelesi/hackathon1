import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ShopLesson.module.css";
import VideoCards from "./VideoCards.jsx";

export default function ShopLesson({}) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors.firstname);

  const url = "https://www.youtube.com/embed/WrWkiojtxWQ?end=10&controls=0";
  return (
    <div className={styles.pitch}>
      <h2>Accomplir son destin en 6 étapes.</h2>
      <p>
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
      <cards className={styles.videoCard}>
        <h2 className={styles.title}>
          " Devenir développeur par l'apprentissage ou par la foi ? "
        </h2>
        <iframe
          width="560"
          height="315"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className={styles.video}
        >
          Pour être il faut croire
        </iframe>
      </cards>

      <VideoCards />

      <h3>Adhérer à notre programme pour devenir le meilleur codeur</h3>

      {/* form  */}

      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.h1}>Détache toi de tes biens matériels</h1>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="cardname" className={styles.label}>
              Nom isncrit sur la carte
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
      <button type="button">Payer</button>
    </div>
  );
}
