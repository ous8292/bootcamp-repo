import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"

function PokemonPage() {
    const [pokemon, setPokemon] = useState({
        name: "bulbasaur",
        id: 1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    })
    const params = useParams()

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${params.pokemon_id}`
        axios.get(url)
        .then((response) => {
            let {data} = response
            setPokemon({
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
                height: data.height
            })
        })
        .catch(err => console.log(err))

        console.log("I am am mounted")
    }, [])

    return (
        <div>
            <img src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name} #{pokemon.id}</h1>
            <ul>
                <li>{pokemon.height}</li>
            </ul>
        </div>
    );
}
    






export default PokemonPage;
