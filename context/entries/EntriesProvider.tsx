import { FC, ReactNode, useEffect, useReducer } from "react";
import { Entry } from "../../interface";
import { entriesReduccer, EntriesContext } from "./";
import entriesApi from "../../apis/entriesApi";

export interface EntriesState {
  entries: Entry[];
}
interface Props {
  children: ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReduccer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });

    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: "[Entry] Edit-Entry", payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntry = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refresh-Entry", payload: data });
  };

  useEffect(() => {
    refreshEntry();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //MEthods
        addNewEntry,
        updateEntry,
        refreshEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
