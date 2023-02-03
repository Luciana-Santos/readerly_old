import { createContext, useState } from 'react';
import { DictionaryProps } from '../types/types';

interface ChildrenProps {
  children: React.ReactNode;
}

interface GlossaryContextProps {
  data: DictionaryProps[];
}

export const GlossaryContext = createContext({} as GlossaryContextProps);

const GlossaryProvider = ({ children }: ChildrenProps) => {
  const [data, setData] = useState<DictionaryProps[]>([]);

  //! faltando a logica de pegar o significado de cada palavra passada para a requisição

  return (
    <GlossaryContext.Provider value={{ data }}>
      {children}
    </GlossaryContext.Provider>
  );
};

export default GlossaryProvider;
