import { useState, useEffect } from "react";
import Busqueda from "./components/Busqueda";
import Error from "./components/Error";
import search from "./assets/icon-search.svg";
import "./App.css";

function App() {
  const [palabra, setPalabra] = useState("");
  const [respuestas, setRespuesta] = useState([]);
  useEffect(() => {
    consulta(palabra.trim());
  }, []);
  const handleClick = async () => {
    if (palabra.length === 0) return;
    await consulta(palabra.trim());
  };
  const consulta = async (palabra) => {
    try {
      const respuesta = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          palabra === "" ? "keyboard" : palabra
        }`
      );
      const resultado = await respuesta.json();
      setRespuesta(resultado);
    } catch (error) {
    }
  };
  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Busca alguna palabra"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
        />
        <img src={search} alt="imagen-buscador" onClick={handleClick} />
      </form>
      {respuestas.length > 0 ? (
        respuestas.map((respuesta) => (
          <Busqueda respuesta={respuesta} key={Date.now() + Math.random()} />
        ))
      ) : (
        <Error/>
      )}
    </main>
  );
}

export default App;
