import { useRef } from 'react';
export const usePrefixId = (prefix: string) => {
  let index = 1;
  const id = useRef<string>(`Salda-${prefix}-${index++}`);
  return id.current;
};
