import { FC, ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interface";
import { entriesReduccer, EntriesContext } from "./";

export interface EntriesState {
  entries: Entry[];
}
interface Props {
  children: ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Minim nulla nisi irure fugiat nisi anim nostrud occaecat Lorem reprehenderit laboris ipsum commodo id.",
      status: "peding",
      crearedAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Progeso: In excepteur aliqua veniam anim proident amet eu amet sunt anim aliqua ullamco.",
      status: "in-progres",
      crearedAt: Date.now() - 8798797987,
    },
    {
      _id: uuidv4(),
      description:
        "Terminada Consectetur ipsum duis cupidatat voluptate veniam do sint cillum ad esse esse ipsum occaecat fugiat.",
      status: "finished",
      crearedAt: Date.now() - 9879877,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReduccer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      crearedAt: Date.now(),
      status: "peding",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Edit-Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //MEthods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
