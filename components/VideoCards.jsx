import React from "react";
import styles from "./VideoCards.module.css";

const videoLinks = [
  {
    title: " Devenir développeur par l'apprentissage ou par la foi ? ",
    urlKey: "https://www.youtube.com/embed/WrWkiojtxWQ",
    description: "Pour être il faut croire",
    accès: "novice",
  },

  {
    title: " Comment se connecter à l'énergie du code ? ",
    urlKey: "https://www.youtube.com/embed/LkUoxS9ZVsc",
    description: "Pour être il faut croire",
    accès: "novice",
  },

  {
    title: " Faire don de ses biens matériels pour mieux coder ",
    urlKey: "https://www.youtube.com/embed/DEqQtoxxlRg",
    description: "Pour être il faut croire",
    accès: "initié",
  },

  {
    title: " Benoit L. Hubert vous donne la solution ",
    urlKey: "https://www.youtube.com/embed/vrgZ4YA3cro",
    description: "Pour être il faut croire",
    accès: "initié",
  },

  {
    title: " Le secret de l'origine des développeurs ",
    urlKey: "https://www.youtube.com/embed/HBdrAZFn1oU",
    description: "Pour être il faut croire",
    accès: "éveillé",
  },

  {
    title: " Matrix réalité ou fiction ? ",
    urlKey: "https://www.youtube.com/embed/NXV3j4LO16Y",
    description: "Pour être il faut croire",
    accès: "éveillé",
  },
];

export default function VideoCards({ titel, url, description }) {
  return (
    <div className={styles.lesson}>
      {videoLinks.map((videoLink) => (
        <cards className={styles.videoCard}>
          <h2 className={styles.title}>{videoLink.title}</h2>
          <iframe
            width="560"
            height="315"
            src={videoLink.urlKey}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className={styles.video}
          >
            {videoLink.description}
          </iframe>
        </cards>
      ))}
    </div>
  );
}
