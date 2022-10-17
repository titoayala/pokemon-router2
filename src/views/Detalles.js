import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/PokemonCard";

export default function Detalles() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon"; //PARA BUSCAR LOS DETALLES DE LOS POKEMONES LISTADOS

  const detallesPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));

    const types = data.types.map((e) => e.type.name);
    setPokemon({ name, stats, src, types });
  };

  useEffect(() => {
    detallesPokemon(name);
  }, [name]);

  return (
    <>
      <Card pokemon={pokemon} />
    </>
  );
}
