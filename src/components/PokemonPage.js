import {React, useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchBy, setSearchBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then(setPokeList)
  }, []);

  const workingPokeList = pokeList.filter((poke) => 
    poke.name.toLowerCase().includes(searchBy.toLowerCase())
    )

  function handleAddPokemon(newPokemon) {
    setPokeList([...pokeList, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchBy={searchBy} onChangeSearch={setSearchBy}/>
      <br />
      <PokemonCollection pokeList={workingPokeList} />
    </Container>
  );
}
	