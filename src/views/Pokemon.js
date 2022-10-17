import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonSeleccionado, setpokemonSeleccionado] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0";  //PARA LISTAR SOLO 30 POKEMONES EN EL SELECT

  const obtenerPokemon = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemon(results);
  };

  const verPokemon = () => {
    if (pokemonSeleccionado) navigate(`/pokemon/${pokemonSeleccionado}`);
    else alert("Por favor seleccione un Pokemon");
  };

  useEffect(() => {
    obtenerPokemon();
  }, []);

  return (
    <>
      <div className="selection">
        <h1>Seleccione un Pokemon</h1>
        <div className="selection-select">
          <select
            value={pokemonSeleccionado}
            className="form-select text-center"
            onChange={(e) => setpokemonSeleccionado(e.target.value)}>
            <option className="option" value="disabled" >Pokemon</option>
            {pokemon.map((elem, i) => (
              <option key={i} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
          <Button onClick={verPokemon}>Ver detalles</Button>
        </div>
      </div>
    </>
  );
}
