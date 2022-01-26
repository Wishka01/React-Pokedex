export const getPokemons = async (offset = 0, limit = 10) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) { }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {}
}

export const getPokemon = async (name) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) { }
}