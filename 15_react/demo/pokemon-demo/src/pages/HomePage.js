import React, { useState, useEffect }from 'react';
import axios from "axios"
import PokeCard from '../components/PokeCard';


function HomePage() {
    const [pokeCards, setPokeCards] = useState([
        {
            name: "bulbasaur",
            id: 1,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            name: "Ivysaur",
            id: 2,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        },
        {
            name: "Venusaur",
            id: 3,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        }
    ])

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/`
            axios.get(url)
            .then(response =>{
                console.log(response.data.results)
                let newPokemon = response.data.results.map((p) => {
                    // convert url to
                    let pokeUrl = p.url.split("/");
                    // extract pokemon id from the url from response
                    let id = Number(pokeUrl[pokeUrl.length - 2]);
                    // return an object
                    return {
                        id: id,
                        name: p.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    };
                });
                setPokeCards(newPokemon)
            })
            .catch(err => console.log(err))
    }, [])

//created a variable with styling and applied that variable
// grid style allows the styling - could also use flexbox
    let gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    // setting the props in a variabble and rendering variable
    const cards = pokeCards.map(card => (
        <PokeCard 
        name={card.name}
        id={card.id}
        image={card.image}
        key={card.id}
        />
    ))


    //.map will not effect the original state

    return (
    <div>
        <h1>Home Page</h1>
        <div style={gridStyle}>
        {/* <PokeCard name="Peter" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" id={9999}/>
        <PokeCard name="bulbasaur" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" id={1}/> */}
        {cards}
        </div>
    </div>)
}

export default HomePage;
