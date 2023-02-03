import icon from "../assets/icons.svg";

const Definition = ({ significado, example }) => {
  return (
    <blockquote className="significados">
      <div></div>
      <section>
        <p>{significado}</p>
        {example && <p className="example">"{example}"</p>}
      </section>
    </blockquote>
  );
};

export default Definition;
