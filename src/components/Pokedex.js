import React from 'react';
import '../styles/Pokedex.css';
import PokemonCard from './PokemonCard';

const Pokedex = (props) => {

    const { pokemons } = props;
    
    return (
        <div className="pokedex">
            <div className="pokedex-grid">
                {pokemons.map((pokemon) => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />
                    );
                })}
            </div>
        </div>
    );
}

export default Pokedex;