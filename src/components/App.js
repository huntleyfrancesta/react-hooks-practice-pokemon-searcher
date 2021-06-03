function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchQuery, setSearchQuery] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(pokeData => setPokemon(pokeData.filter((poke) => poke.name.includes(searchQuery))))
  }, [searchQuery])



  // console.log(pokemon)
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} setPokemon={setPokemon} setSearchQuery={setSearchQuery}/>
    </div>
  );
}