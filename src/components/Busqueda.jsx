import { useState } from "react";
import PartSpeech from "./PartSpeech";
import iconPlay from "../assets/icon-play.svg";
const Busqueda = ({ respuesta }) => {
  const { word, phonetic, meanings, sourceUrls, phonetics } = respuesta;

  const {
    0: { audio },
  } = phonetics.filter((phonetic) => phonetic.audio !== "");
  return (
    <div className="grid grid-top">
      <blockquote className="container__audio">
        <div>
          <h2>{word}</h2>
          <p className="color">{phonetic}</p>
        </div>
        <img
          src={iconPlay}
          alt="icon-play"
          onClick={() => document.querySelector("#audio").play()}
        />
        <audio id="audio">
          <source src={ audio.length > 0 ? audio : ''} type="audio/mp3" />
        </audio>
      </blockquote>

      {meanings.map((speech) => (
        <PartSpeech speech={speech} key={speech.partOfSpeech} />
      ))}
      <div className="line line-w"></div>
      <p>
        Source:{" "}
        <span>
          <a href={sourceUrls}>{sourceUrls}</a>
        </span>
      </p>
    </div>
  );
};

export default Busqueda;
