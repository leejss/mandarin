import { useRef } from 'react';
export const usePrefixId = (prefix: string, index: number) => {
  const id = useRef<string>(`Salda-${prefix}-${index}`);
  return id.current;
};
