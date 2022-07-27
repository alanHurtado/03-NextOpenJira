import { createContext } from "react";
export interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddEntry: (isAdd:boolean) => void;
  startDragging: (isDragging:boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
