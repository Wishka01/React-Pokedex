import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
import Pokedex from './Pokedex';
import SeachBar from './SearchBar';
import { getPokemonData, getPokemon, getPokemons } from '../api.js';
import Pagination from './Pagination';
import { ActualPokemonProvider } from '../contexts/ActualPokemonContext';
import ActualPokemon from './ActualPokemon';

const Main = () => {

    const [limit, setLimit] = useState(15);
    const [hasData, setHasData] = useState(true);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [actualPokemon, setActualPokemon] = useState();
    const [count, setCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const fetchPokemons = async () => {
        setHasData(true);
        setLoading(true);
        const data = await getPokemons(offset, limit);

        if (!data) {
            setHasData(false);
            return;
        }

        setCount(data.count);
        const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
        });
        const result = await Promise.all(promises);
        setLoading(false);
        setPokemons(result);
    }

    const onLeftClick = () => {
        if (offset > 0) {
            setOffset(offset - limit);
            setPage(page - 1);
        }
    }

    const onRightClick = () => {
        if (offset < count) {
            setOffset(offset + limit);
            setPage(page + 1);
        }
    }

    const onSearch = async (search) => {
        setHasData(true);
        if (search === "") {
            setOffset(0);
            setPage(1);
            fetchPokemons();
            return;
        }

        setLoading(true);
        const data = await getPokemon(search);
        if (!data) {
            setHasData(false);
            setLoading(false);
            return;
        }

        setLoading(false);
        setCount(1);
        setPokemons([data]);
    }

    const onChange = (e) => {
        setLimit(e.target.value);
    }

    useEffect(() => {   
        fetchPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, limit]);

    useEffect(() => {
        if (!actualPokemon)
            return

        
    }, [actualPokemon]);

    return (
        actualPokemon ? 
            <ActualPokemon actualPokemon={actualPokemon} setActualPokemon={setActualPokemon}/>
        :
        <div className="main">
            <div className="searchbar_container">
                <SeachBar onSearch={onSearch}/>
                <Pagination page={page} lastPage={Math.ceil(count / limit)} onLeftClick={onLeftClick} onRightClick={onRightClick}/>
            </div>
            <div className="limit-box_container">
                <label className='limit-box-lbl' htmlFor="limit-box">Limit: </label>
                <select defaultValue={15} className='limit-box' name="limit-box" id="limit-box" onChange={onChange}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                    <option value="21">21</option>
                    <option value="24">24</option>
                    <option value="27">27</option>
                    <option value="30">30</option>
                </select>
            </div>
            {
            !hasData ?
                <div className="msg_container">
                    <h3 className='noData'>No Data :(</h3>
                </div>
            :
                loading ? 
                    <div className="msg_container">
                        <h3 className='loading-msg'>Loading Pokémons...</h3> 
                    </div>
                :
                    <ActualPokemonProvider value={{actualPokemon: actualPokemon, setActualPokemon: setActualPokemon}}>
                        <Pokedex pokemons={pokemons}/>
                    </ActualPokemonProvider>
            }
        </div>
    );
}

export default Main;