import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(pokeList) {

  const pokemenItem = pokeList.pokeList.map((pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ))
  return (
    <Card.Group itemsPerRow={4}>
      {pokemenItem}
    </Card.Group>
  );
}