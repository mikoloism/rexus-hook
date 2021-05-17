import React, { createContext, useContext } from 'react';

const TruxContext = createContext({});

const useTrux = () => useContext(TruxContext);

export { TruxContext, useTrux };
