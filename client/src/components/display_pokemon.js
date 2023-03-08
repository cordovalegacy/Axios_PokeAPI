import { useState, useEffect } from 'react'
import axios from 'axios'

const Display = () => {
    const [pokeResults, setPokeResults] = useState([])

    //useEffect runs immediately upon render, and we can limit the re render by passing a value 
    //into the square brackets at the end (the dependency). If we put state in there, it will only
    //re render upon the value changing
    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((res) => {
            setPokeResults([...pokeResults, res.data.results])
            //no need to res.json() as axios handles that
            console.log(res.data.results)
        })
        .catch((err) => err)
    }, [])

    console.log(pokeResults[0])

    return (
        <div>
            <h1>Here is where we will display our Pokemans</h1>
            <div className='poke-container'>
                {pokeResults[0].map((pokemans, index) => <p key={index}>{pokemans.name.charAt(0).toUpperCase() + pokemans.name.slice(1)}</p>)}
            </div>
        </div>
    )
}

export default Display