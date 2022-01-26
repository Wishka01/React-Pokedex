import React from 'react';
import ActualPokemonContext from '../contexts/ActualPokemonContext';
import '../styles/PokemonCard.css';
const {useContext} = React;

const Pokemon = (props) => {

    const { setActualPokemon } = useContext(ActualPokemonContext); 
    const { pokemon } = props;

    const onClick = (e) => {
        e.preventDefault();
        setActualPokemon(pokemon);
    }

    return (
        <div id={pokemon.name} className="pokemon-card" onClick={onClick}>
            <div className="pokemon-img_container">
                <img 
                src={pokemon.sprites.front_default}
                alt={pokemon.name} 
                className="pokemon-img" />
            </div>
            <div className="pokemon-body">
                <div className="pokemon-header">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <h3 className="pokemon-id">#{pokemon.id}</h3>
                </div>
                <div className="pokemon-bottom">
                    <div className="pokemon-types_container">
                        {pokemon.types.map((type) => {
                            return (
                                <h4 className={`pokemon-type ${type.type.name}`} key={`${pokemon.name}${type.type.name}`}><span>{type.type.name}</span></h4>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;