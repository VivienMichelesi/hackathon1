import React from "react";

const videoLinks = [
  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/WrWkiojtxWQ",
    description: "Pour être il faut croire",
  },

  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/LkUoxS9ZVsc",
    description: "Pour être il faut croire",
  },

  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/DEqQtoxxlRg",
    description: "Pour être il faut croire",
  },

  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/vrgZ4YA3cro",
    description: "Pour être il faut croire",
  },

  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/HBdrAZFn1oU",
    description: "Pour être il faut croire",
  },

  {
    title: " Devenir développeur, apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/NXV3j4LO16Y",
    description: "Pour être il faut croire",
  },
];

export default function VideoCards({ titel, url, description }) {
  return (
    <div>
      {videoLinks.map((videoLink) => (
        <cards>
          <iframe
            width="560"
            height="315"
            src={videoLink.urlKey}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
            {videoLink.description}
          </iframe>
        </cards>
      ))}
    </div>
  );
}
