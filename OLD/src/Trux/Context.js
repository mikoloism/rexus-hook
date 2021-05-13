import * as React from 'react';

const TruxContext = React.createContext({});

const useTrux = () => React.useContext(TruxContext);

export { TruxContext, useTrux };
