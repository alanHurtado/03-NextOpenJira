import { createContext } from "react";
export interface ContextProps {
  sidemenuOpen: boolean;

  //methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
