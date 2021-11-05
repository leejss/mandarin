import { useContext, useRef } from 'react';
import { UniqueIdFactoryContext } from './context';

export function useUniqueId(prefix = '', overrideId = '') {
  const idFactory = useContext(UniqueIdFactoryContext);
  const uniqueIdRef = useRef<string | null>(null);

  if (!idFactory) {
    throw new Error('Cannot find id factory');
  }

  if (overrideId) {
    return overrideId;
  }

  if (!uniqueIdRef.current) {
    uniqueIdRef.current = idFactory.nextId(prefix);
  }

  return uniqueIdRef.current;
}
