import React from 'react';
import { globalIdGeneratorFactory, UniqueIdFactory } from './factory';

export const UniqueIdFactoryContext =
  React.createContext<UniqueIdFactory | null>(null);

export const UniqueIdProvider: React.FC = ({ children }) => {
  const uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);
  return (
    <UniqueIdFactoryContext.Provider value={uniqueIdFactory}>
      {children}
    </UniqueIdFactoryContext.Provider>
  );
};
