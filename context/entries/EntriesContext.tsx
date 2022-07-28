import { createContext } from 'react';
import { Entry } from '../../interface';
export interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
  refreshEntry: () => Promise<void>;

}

export const EntriesContext = createContext({} as ContextProps);