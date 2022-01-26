import React from 'react';
import '../styles/ActualPokemon.css';

const ActualPokemon = (props) => {

    const { actualPokemon, setActualPokemon } = props;

    const onClick = (e) => {
        e.preventDefault();
        setActualPokemon(undefined);
    }

    return (
        <div className="actualPokemon_container">
            <div className="actualPokemon_card">
                <button className='back-btn' onClick={onClick}><span className="material-icons-outlined">navigate_before</span></button>
                <div className="img_container">
                    <img className='img'
                    src={actualPokemon.sprites.front_default} 
                    alt={actualPokemon.name} />
                </div>
                <div className="body_container">
                    <div className="pokemon-name_container">
                        <h2 className="number">No. {actualPokemon.id}</h2>
                        <h2 className="name">{actualPokemon.name}</h2>
                    </div>
                    <div className="pokemon-info_container">
                        <div className="types_container">
                            {actualPokemon.types.map((type) => {
                                return <h3 className={`type ${type.type.name}2`} key={type.type.name}>{type.type.name}</h3>
                            })}
                        </div>
                        <div className="height_container"><h3 className="info">Height: {actualPokemon.height / 10}m</h3></div>
                        <div className="weight_container"><h3 className="info">Weight: {actualPokemon.weight / 10}kg</h3></div>
                        <h3 className="abilities-txt info">Abilities</h3>
                        <div className="abilities_container">
                            {actualPokemon.abilities.map((ability) => {
                                return <h3 className="ability" key={ability.ability.name}>{ability.ability.name}</h3>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActualPokemon;