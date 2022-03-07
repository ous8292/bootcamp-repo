import { useState } from "react"
import { useEffect } from "react"



function App() {
  const [villagers, setVillagers] = useState([
    {
      id: 1,
      name: "Cyrano",
      species: "Ant Eater",
      image: ""
    }, {
      id: 90000,
      name: "Jesus",
      species: "Human",
      image: "image"
    }
  ])

  useEffect(() => {
    let url = 'https://acnhapi.com/v1a/villagers'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.slice(0,15))
      console.log(data)
      let newVillagers = data.map(villager => ({
        name: villager.name["name-USen"],
        species: villager["species"],
        id: villager.id,
        image: villager.image_uri
      }))
      console.log(newVillagers)
      setVillagers(newVillagers)
    })
    .catch(err => console.log(err))
  }, [])




  const villagerCards = villagers.map(villager => (
    <article key={villager.id}>
      <img src={villager.image} alt={villager.name} />
      <h2> {villager.name} </h2>
      <p> {villager.species} </p>

    </article>
  ))


  return (
    <div className="App">
      <h1>Animal Crossing Practice</h1>
      {villagerCards}
    </div>
  );
}

export default App;
