import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onClick = () => {
        onSearch(search.toLowerCase());
    }

    const onKeyPress = (e) => {
        
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search Pokémon" onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}><i className='material-icons'>search</i></button>
        </div>
    );
}

export default SearchBar;