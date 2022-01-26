import React from 'react';

const ActualPokemonContext = React.createContext({
    actualPokemon: {},
    setActualPokemon: () => {}
});

export const ActualPokemonProvider = ActualPokemonContext.Provider;

export default ActualPokemonContext;