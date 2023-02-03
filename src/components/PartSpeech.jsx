import Definition from "./Definition";
import Sinonimos from "./Sinonimos";
const PartSpeech = ({ speech }) => {
  const { partOfSpeech, synonyms, definitions } = speech;

  return (
    <div className="grid">
      <section className="container__line">
        <p className="italic">{partOfSpeech}</p>
        <div className="line"></div>
      </section>
      <p>Meaning</p>
      {definitions.map((significado) => (
        <Definition
          significado={significado.definition}
          example={significado.example}
          key={Date.now() + Math.random()}
        />
      ))}

      {synonyms.length > 0 ? <p className="italic">synonyms:</p> : <></>}
      <div className="flex">
        {synonyms.map((significado) => (
          <Sinonimos
            significado={significado}
            key={Date.now() + Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default PartSpeech;
